async function getKey(passphrase, salt = null) {
  passphrase = (new TextEncoder()).encode(passphrase);
  let digest = await crypto.subtle.digest({ name: 'SHA-256' }, passphrase);
  let keyMaterial = await crypto.subtle.importKey(
    'raw',
    digest,
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );
  if (!salt)
    salt = crypto.getRandomValues(new Uint8Array(16));
  let key = await crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
  return [key, salt];
}

function getFixedField() {
  let value = localStorage.getItem('96bitIVFixedField');
  if (value)
    return Uint8Array.from(JSON.parse(value));
  value = crypto.getRandomValues(new Uint8Array(12));
  localStorage.setItem('96bitIVFixedField', JSON.stringify(Array.from(value)));
  return value;
}

function getInvocationField() {
  let counter = localStorage.getItem('32bitLastCounter');
  if (counter)
    counter = Uint32Array.from(JSON.parse(counter));
  else
    counter = new Uint32Array(1);
  counter[0]++;
  localStorage.setItem('32bitLastCounter', JSON.stringify(Array.from(counter)));
  return counter;
}

export const encrypt = async (input, passphrase) => {
  let [key, salt]    = await getKey(passphrase);
  let fixedPart      = getFixedField();
  let invocationPart = getInvocationField();
  let iv = Uint8Array.from([...fixedPart, ...new Uint8Array(invocationPart.buffer)]);
  let encryptedData = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    (new TextEncoder()).encode(JSON.stringify(input))
  );
  encryptedData = Array.from(new Uint8Array(encryptedData), char => String.fromCharCode(char)).join('');
  return JSON.stringify([
    btoa(encryptedData),
    Array.from(invocationPart),
    Array.from(salt)
  ]);
}

export const decrypt = async (encryptedResult, passphrase) => {
  let [encryptedData, invocationPart, salt] = JSON.parse(encryptedResult);
  let [key] = await getKey(passphrase, Uint8Array.from(salt));
  let invocationPartTypedArray = new Uint32Array(1);
  invocationPartTypedArray[0] = invocationPart;
  let iv = Uint8Array.from([...getFixedField(), ...(new Uint8Array(invocationPartTypedArray.buffer))]);
  encryptedData = atob(encryptedData);
  encryptedData = Uint8Array.from(encryptedData.split(''), char => char.charCodeAt(0));
  let decryptedData = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    encryptedData
  );
  decryptedData = (new TextDecoder()).decode(new Uint8Array(decryptedData));
  return JSON.parse(decryptedData);
}
export const generatePassword = () => {
  const specials = '!@#$%^&*()_+{}:"<>?[]|/~-@';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '01234567890123456789012345';
  let type = Math.floor(Math.random() * (4 - 1) + 1)
  let password = ''
  do {
    const pos = Math.floor(Math.random() * (10 - 1) + 1)
    switch(type) {
      case 1:
        password += specials[pos]
        type = 2
        break
      case 2:
        password += lowercase[pos]
        type = 3
        break
      case 3:
        password += uppercase[pos]
        type = 4
        break
      case 4:
        password += numbers[pos]
        type = 1
        break
    }
  } while(password.length < 13)
  return password
}
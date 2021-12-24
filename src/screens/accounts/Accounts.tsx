import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getAccounts } from 'store/accounts/thunks';
import { logout } from 'store/auth/thunks';

import { selectAuthenticated, selectFetching, selectUser } from 'store/auth/selectors';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ReactComponent as Theme } from 'assets/images/circle-half-stroke-solid.svg';
import { selectAccounts } from 'store/accounts/selectors';
import { setDarkMode } from 'store/settings/reducer';
import { useTranslation } from 'react-i18next';

import { webAuthnSignin, webAuthnSignup } from 'helpers/webauth';
import Button from 'ui/button';
import Card from 'ui/card';

import styles from 'screens/accounts/Accounts.module.css';

export function Accounts () {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const [faceId, setFaceId] = useState(false);

  const isFetching = useAppSelector(selectFetching);
  const isAuthenticated = useAppSelector(selectAuthenticated);
  const user = useAppSelector(selectUser);
  const accounts = useAppSelector(selectAccounts);

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/login');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (user?.uid) {
      dispatch(getAccounts(user?.uid));
    }
  }, [user]);

  useEffect(() => {
    if (isAuthenticated && faceId) {
      const usersString = localStorage.getItem('users');
      if (usersString) {
        webAuthnSignin()
          .then((e: any) => {
            // eslint-disable-next-line no-console
            console.log(e);
          })
          .catch((e: any) => {
            // eslint-disable-next-line no-console
            alert(`1 ${e.toString()}`);
            // dispatch(logout());
          });
      } else {
        webAuthnSignup('randomUser')
          .then((e: any) => {
            // eslint-disable-next-line no-console
            // console.log(`2 ${e.toString()}`);
          })
          .catch((e) => {
            // eslint-disable-next-line no-console
            alert(`2 ${e.toString()}`);
            // dispatch(logout());
          });
      }
    }
  }, [isAuthenticated, faceId]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('accounts')}</h1>
        <button onClick={() => setFaceId(true)}>faceid</button>
      </div>
      <div className={styles.content}>
        <div className={styles.list}>
          {accounts.map((item) => {
            return <Card
              key={item.name}
              name={item.name}
              username={item.username}
              password={item.password}
            />;
          })}
        </div>
      </div>
      <div className={styles.footer}>
      <Button
          isLoading={isFetching}
          disabled={isFetching}
          onClick={() => dispatch(logout())}
        >
          <span>{t('logout')}</span>
        </Button>
      <Theme className={styles.setTheme} onClick={() => dispatch(setDarkMode())} />
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getAccounts } from 'store/accounts/thunks';
import { logout } from 'store/auth/thunks';

import { selectAuthenticated, selectFetching, selectUser } from 'store/auth/selectors';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ReactComponent as Theme } from 'assets/images/circle-half-stroke-solid.svg';
import { selectAccounts } from 'store/accounts/selectors';
import { setDarkMode } from 'store/settings/reducer';
import { useTranslation } from 'react-i18next';

import Button from 'ui/button';
import Card from 'ui/card';

import styles from 'screens/accounts/Accounts.module.css';

export function Accounts () {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useAppDispatch();

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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('accounts')}</h1>
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

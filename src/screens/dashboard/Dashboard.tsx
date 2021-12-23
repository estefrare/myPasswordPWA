import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getAccounts } from 'store/accounts/thunks';
import { logout } from 'store/auth/thunks';

import { selectAuthenticated, selectFetching, selectUser } from 'store/auth/selectors';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectAccounts } from 'store/accounts/selectors';
import { useTranslation } from 'react-i18next';

import Button from 'ui/button';
import styles from 'screens/dashboard/Dashboard.module.css';

export function Dashboard () {
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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t('dashboard')}</h1>
      <Button
        isLoading={isFetching}
        disabled={isFetching}
        onClick={() => dispatch(getAccounts(user?.uid))}
      >
        <span>test</span>
      </Button>
      <ol>
        {accounts.map((item) => <li key={item.password}>{item.password}</li>)}
      </ol>
      <Button
        isLoading={isFetching}
        disabled={isFetching}
        onClick={() => dispatch(logout())}
      >
        <span>{t('logout')}</span>
      </Button>
    </div>
  );
}

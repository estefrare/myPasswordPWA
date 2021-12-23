import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { logout } from 'store/auth/thunks';

import { selectAuthenticated, selectFetching } from 'store/auth/selectors';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useTranslation } from 'react-i18next';

import Button from 'ui/button';
import styles from 'screens/dashboard/Dashboard.module.css';

export function Dashboard () {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const isFetching = useAppSelector(selectFetching);
  const isAuthenticated = useAppSelector(selectAuthenticated);

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
        onClick={() => dispatch(logout())}
      >
        <span>{t('logout')}</span>
      </Button>
    </div>
  );
}

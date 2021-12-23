import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { login } from 'store/auth/thunks';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import packageJson from '../../../package.json';

import { selectAuthenticated, selectError, selectFetching } from 'store/auth/selectors';
import Button from 'ui/button';
import Input from 'ui/input';
import Modal from 'ui/modal';
import { ReactComponent as Theme } from 'assets/images/circle-half-stroke-solid.svg';
import brand from 'assets/images/login-background.png';
import { cleanError } from 'store/auth/reducer';
import keyIcon from 'assets/images/key.png';
import logo from 'assets/images/login-logo.png';
import { setDarkMode } from 'store/settings/reducer';
import styles from 'screens/login/Login.module.css';

export function Login () {
  const { t } = useTranslation();
  const history = useHistory();
  const isFetching = useAppSelector(selectFetching);
  const error = useAppSelector(selectError);
  const isAuthenticated = useAppSelector(selectAuthenticated);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('frare.esteban+test@gmail.com');
  const [password, setPassword] = useState('test123');

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard');
    }
  }, [isAuthenticated]);

  return (
    <>
      <Modal
        show={!!error}
        title={t('error')}
        message={t(error?.code || '')}
        close={{
          callback: () => dispatch(cleanError())
        }}
      />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <img src={logo} alt="logo" className={styles.logoImage} />
            <img src={brand} alt="brand" className={styles.brandImage} />
            <div className={styles.nameContaner}>
              <div className={styles.appName}>
                MY PASSWORD <img src={keyIcon} alt="logo" className={styles.keyIcon} />
              </div>
              <div className={styles.appSubname}>
                Only remember one
              </div>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.welcome}>{t('welcome')}</div>
            <Input
              value={email}
              disabled={isFetching}
              onChange={setEmail}
              placeholder={t('email')}
            />
            <Input
              value={password}
              disabled={isFetching}
              onChange={setPassword}
              placeholder={t('password')}
            />
            <Button
              isLoading={isFetching}
              disabled={isFetching}
              onClick={() => dispatch(login({ email, password }))}
            >
              <span>{t('login')}</span>
            </Button>
          </div>
        </div>
        <p className={styles.version}>{packageJson.version}</p>
        <Theme className={styles.setTheme} onClick={() => dispatch(setDarkMode())} />
      </div>
    </>
  );
}

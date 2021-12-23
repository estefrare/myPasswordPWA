import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { login } from 'store/auth/thunks';
import { useTranslation } from 'react-i18next';
import { selectFetching, selectError } from 'store/auth/selectors';
import Modal from 'ui/modal';
import Button from 'ui/button';
import Input from 'ui/input';
import styles from './Login.module.css';
import brand from 'assets/images/login-background.png';
import logo from 'assets/images/login-logo.png';
import keyIcon from 'assets/images/key.png';
import { ReactComponent as Theme } from 'assets/images/circle-half-stroke-solid.svg';
import { setDarkMode } from 'store/settings/reducer';
import { cleanError } from 'store/auth/reducer';

export function Login () {
  const { t } = useTranslation();
  const isFetching = useAppSelector(selectFetching);
  const loginError = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('frare.esteban+test@gmail.com');
  const [password, setPassword] = useState('test123');

  return (
    <>
      <Modal
        show={!!loginError}
        title={'hola'}
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
        <Theme className={styles.setTheme} onClick={() => dispatch(setDarkMode())} />
      </div>
    </>
  );
}

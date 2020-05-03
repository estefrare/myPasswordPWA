import React from 'react';
import Header from './header'
import styles from './home.module.css'

export const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      Home
    </div>
  )
}

export default Home
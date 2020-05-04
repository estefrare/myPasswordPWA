import React from 'react';
import Header from './header'
import CardList from './card-list'
import styles from './home.module.css'

export const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <CardList />
      </div>
    </div>
  )
}

export default Home
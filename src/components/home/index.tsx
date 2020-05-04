import React, { useState } from 'react';
import Header from './header'
import CardList from './card-list'
import Modal from 'components/shared/modal'
import Card from 'components/home/card-list/card'
import styles from './home.module.css'

export const Home = () => {
  const [ isAddMode, setAddMode ] = useState(false)

  return (
    <div className={styles.container}>
      <Modal
        open={isAddMode}
        close={() => setAddMode(false)}
        callback={() => setAddMode(true)}
        title="Delete"
        detail="Are you sure you want to delete this item?"
      >
        <Card isAdding cancelAdding={() => setAddMode(false)}/>
      </Modal>
      <Header />
      <div className={styles.content}>
        <CardList />
      </div>
      <button onClick={() => setAddMode(true)} className={styles.addButton}>
        <i className="material-icons">add</i>
      </button>
    </div>
  )
}

export default Home
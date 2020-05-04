import React, { useEffect } from 'react';
import Card from './card'
import { ReduxProps } from '.'
import styles from './card-list.module.css'

export const CardList = (props: ReduxProps) => {

  const { getServices } = props

  useEffect(() => {
    getServices()
  }, [getServices])

  return (
    <div className={styles.container}>
      {props.serviceList.map((service) => <Card key={service.name} service={service} />)}
    </div>
  )
}

export default CardList
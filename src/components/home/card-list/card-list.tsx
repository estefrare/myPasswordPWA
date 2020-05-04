import React, { useEffect, useMemo, useState } from 'react';
import Card from './card'
import { ReduxProps } from '.'
import styles from './card-list.module.css'

export const CardList = (props: ReduxProps) => {

  const { getServices, serviceList } = props
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getServices()
  }, [getServices])

  const filterList = useMemo(() => {
    return serviceList.filter((service) =>
      service.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  }, [filter, serviceList]);

  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="Search"
          className={styles.input}
          value={filter}
          onChange={(e) => setFilter(e.target.value)} 
          />
        <i className="material-icons">search</i>
      </div>
      <div className={styles.list}>
        {filterList.map((service) => <Card key={service.name} service={service} />)}
      </div>
    </div>
  )
}

export default CardList
import React, { useEffect, useMemo, useState } from 'react';
import Card from './card'
import PulseLoader from 'react-spinners/PulseLoader'
import { ReduxProps } from '.'
import styles from './card-list.module.css'

export const CardList = (props: ReduxProps) => {

  const { getServices, serviceList, isFetching } = props
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
        {isFetching && filterList.length === 0
          ? (<div className={styles.loader}><PulseLoader size={10} color={'#FFF'} loading={true} /></div>) 
          : filterList.map((service) => <Card key={service.key} service={service} />)
        }
      </div>
    </div>
  )
}

export default CardList
import css from './Table.module.css';
import {nanoid} from 'nanoid';
import Button from '../Button/Button';

const Table = ({data, handleReset}) => {
  return (
    <div>
      <Button name={'Сброс'} type={'reset'} handleReset={handleReset} />

      <div className={css.table}>
        {data.map(item => {
          return (<div className={css['table-flex']}>
            <div className={css['table-item']}>{data.indexOf(item)+1}</div>
            <div className={css['table-item']}>{item.name}</div>
            <div className={css['table-item']}>{item.country}</div>
            <div className={css['table-item']}><a href={item.web_pages}>Перейти на сайт</a></div>
          </div>)
      })}
      </div>
    </div>
  )
}

export default Table;
import css from './Table.module.css';
import {nanoid} from 'nanoid';
import Button from '../Button/Button';

const Table = ({data}) => {
  return (
    <div>
      <Button name={'Сброс'} type={'reset'} />

      <div className={css.table}>
        {data.map(item => {
          return (<div className={css.grid} key={nanoid()}>
            <div className={css['grid-item']}>{data.indexOf(item)+1}</div>
            <div className={css['grid-item']}>{item.name}</div>
            <div className={css['grid-item']}>{item.country}</div>
            <div className={css['grid-item']}><a href={item.web_pages}>Перейти на сайт</a></div>
          </div>)
      })}
      </div>
    </div>
  )
}

export default Table;
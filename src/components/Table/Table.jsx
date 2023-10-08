import css from './Table.module.css';
import Button from '../Button/Button';

const Table = ({ data, handleReset }) => {

  return (
    <div>
      <Button name={'Сброс'} type={'reset'} handleReset={handleReset} />

      <div className={css.table}>
        {data.map(item => {
          return (<div className={css['table-flex']} key={`${item.name}-key`}>
            <div className={css['table-item']}>{data.indexOf(item)+1}</div>
            <div className={css['table-item']}>{item.name}</div>
            <div className={css['table-item']}><a href={item.web_pages}>На сайт</a></div>
          </div>)
      })}
      </div>
    </div>
  )
}

export default Table;
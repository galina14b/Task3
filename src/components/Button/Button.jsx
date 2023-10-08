import css from './Button.module.css';

const Button = ({ name, type, handleReset }) => {
  
  return (
    <>
      {type === 'send' && <button type='submit' className={css[`${type}`]}>{name}</button>}
      
      {type === 'reset' && <button type='button' onClick={handleReset} className={css[`${type}`]}>{name}</button>}

    </>
  )
}

export default Button;
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Button from './components/Button/Button';
import Table from './components/Table/Table';

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let storage = localStorage.getItem('table');
    if (storage) {
      setData(JSON.parse(storage))
    }
  }, []);



  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const result = await axios.get(`http://universities.hipolabs.com/search?country=${search.trim()}`);
      setData(result.data)
      localStorage.setItem('table', JSON.stringify(result.data))
    } catch (error) {
      console.log(error.message)
    } 
  }

  function handleReset() {
    setData(null);
    setSearch('');
    localStorage.removeItem('table');
  }

  return (
    <div className="app">
      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <input placeholder='Введиту страну...' className="input" onChange={(event) => setSearch(event.target.value)} value={search} type="text" />
        <Button name={'Отправить'} type={'send'} />
      </form>

      {data && <Table data={data} handleReset={handleReset} />}
      {data && data.length< 1 && <h2>No University has found...</h2>}
    </div>
  );
}

export default App;

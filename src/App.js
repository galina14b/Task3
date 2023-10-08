import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Button from './components/Button/Button';
import Table from './components/Table/Table';

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      let result = await axios.get(`http://universities.hipolabs.com/search?country=${search.trim()}`);
      setData(result.data)
      console.log(result.data)
    } catch (error) {
      console.log(error.message)
    } finally {
      setSearch('')
    }

  }

  return (
    <div className="app">
      <form onSubmit={(event) => handleSubmit(event)}>
        <input onChange={(event) => setSearch(event.target.value)} value={search} type="text" />
        <Button name={'Отправить'} type={'send'} />
      </form>

      {data && <Table data={ data } />}
    </div>
  );
}

export default App;

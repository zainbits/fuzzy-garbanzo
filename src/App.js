import './App.css';
import { useEffect, useState } from 'react'
import { backend } from './backend'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './layouts/Dashboard/Dashboard'
import setTheme from './utils/setTheme';

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    setTheme()
    backend.getEntries().then(res => setData(res.items[0].fields)).catch(console.error)
  }, [setData, setTheme])
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;

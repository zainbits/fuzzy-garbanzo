import './App.css';
import { useEffect } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './layouts/Dashboard/Dashboard'
import setTheme from './utils/setTheme'
import { fetchItems } from './redux/contentful/contentful-actions'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    setTheme()
    dispatch(fetchItems())
  }, [dispatch])
  return (
      <div className="App">
        <Sidebar />
        <Dashboard />
      </div>
  );
}

export default App;

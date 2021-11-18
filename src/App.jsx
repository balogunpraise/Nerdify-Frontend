import './App.scss'
import Books from './components/books/Books'
import Home from './home/Home'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="books" element={<Books/>}/>
      </Routes>
    </div>
    
  )
}

export default App

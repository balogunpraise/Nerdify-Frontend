import './App.scss'
import Books from './components/books/Books'
import Home from './home/Home'
import {Routes, Route} from 'react-router-dom'
import Details from './components/details/details'
import Login from './components/auth/Login'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/book-details/:id" element={<Details/>}/>
        <Route path="/auth/login" element={<Login/>}/>

      </Routes>
    </div>
    
  )
}

export default App

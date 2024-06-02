import './App.css';
import {useState} from 'react';
import Main from './views/Main';
import Form from './components/AuthorForm';
import Update from './components/Update';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  const [authorList, setAuthorList] = useState([]);


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = '/home' element = {<Main authorList={authorList} setAuthorList={setAuthorList}/>} />
          <Route path = '/new' element = {<Form authorList={authorList} setAuthorList={setAuthorList}/>} />
          <Route path = '/authors/edit/:id' element = {<Update/>} />
          <Route path = '/' element = {<Navigate to = '/home'/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
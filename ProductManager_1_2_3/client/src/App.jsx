import { useState } from 'react'
import "./App.css"
import Main from './components/Main'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Edit from'./views/Edit'
import Product from'./views/Product'



function App() {
  const [list,setList]=useState([])
  return (
    <>
    
    
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Main list={list} setList={setList}/>}default/>
        <Route path="/products/:id" element={<Product list={list} setList={setList}/>}/>
        <Route path="/products/edit/:id" element={<Edit list={list} setList={setList}/>}/>
        <Route path="*" element={<Navigate to ='/'/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

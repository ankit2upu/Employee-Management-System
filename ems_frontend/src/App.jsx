import { useState } from 'react'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Employee from './components/Employee'




function App() {

  

  
  return (
        <>

    <BrowserRouter>
         
         <Header/>

      
       
         <Routes>
          {/* http://localhost:5173 */}
          <Route path='/' element={<ListEmployeeComponent/>}>
            
       </Route>
       {/* http://localhost:5173/employees */}
       <Route path='/employees' element={<ListEmployeeComponent/>}></Route>

             {/* http://localhost:5173/add-employee*/}
        <Route path='/add-employee' element={<Employee/>}></Route>
         {/* http://localhost:5173/edit-employee/1*/}
         <Route path='/edit-employee/:id' element={<Employee/>} ></Route>
        
          </Routes>

         <Footer/>
       </BrowserRouter>
       
    </>
  
  )
}

export default App

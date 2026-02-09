import React from 'react'
import { Link } from 'react-router-dom'
import ems_nav from '../assets/ems_nav.png'

const Header = () => {
  return (
    <div>
        <header >
            <nav className='navbar navbar-dark bg-dark  '>
              <Link to="/"><img src={ems_nav} alt=""
                style={{width:"250px", height:"45px" ,   marginLeft:"20px", cursor:"pointer"}}
                /></Link>
              
                <ul  style={ {color:"white",
                     display:"flex",
                     listStyle:"none",
                     gap:"30px",
                     alignItems:"center",
                     padding:"8px 20px",
                     marginRight:"50px",
                     cursor:"pointer"
                     
            
                      }} >
                    <li> <Link to="/">Home</Link> </li>
                     <li> <Link to="/add-employee">Add Employees</Link></li>
                     <li> <Link > Employees</Link>   </li>
                  
                 
                </ul>
            </nav>

           
            
        </header>
      
    </div>
  )
}

export default Header

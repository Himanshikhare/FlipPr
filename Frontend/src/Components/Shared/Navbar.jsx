import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' fixed top-0 left-0 w-full bg-white shadow-md z-50 text-black '>
            <div className='flex items-center justify-between px-14 py-5' >
                {/*logo div*/}
                <div className="flex-shrink-0 ">
                    <img src="\logo.svg" alt="Logo" className="w-40 h-auto sm:w-48 md:w-30 "></img>
                </div>

                <div className="flex items-center gap-12">
                    <ul className='flex font-medium items-center gap-10'>
                        <Link to="/"><li className="hover:cursor-pointer">Home</li></Link>
                        <li className="hover:cursor-pointer">Services</li>
                        <li className="hover:cursor-pointer">About</li>
                     <Button><Link to="/admin">Admin Panel</Link> {/* Admin Panel Link */}</Button>
                    </ul>
                    
                </div>
               
                
                   

               
            </div>

            
            
        
        </nav>

  )
}

export default Navbar

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage'
import AdminPanel from './Components/Adminpanel/AdminPanel'

const appRouter=createBrowserRouter([
  {
    path: "/",
    element:<LandingPage/>
  },
  {
    path: "/admin",
    element:<AdminPanel/>
  },
 
])

function App() {
 

  return (
     <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App

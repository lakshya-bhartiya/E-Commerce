import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './app/routes'

import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      
      <RouterProvider router={router}/>
     <ToastContainer/>
    </div>
    
  )
}

export default App

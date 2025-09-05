import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'

// import all component
import Home from './component/home/home.jsx'
import About from './component/about/about.jsx'
import Contact from './component/contect/contact.jsx'
import User from './component/user/user.jsx'
import Github, { githubloader } from './component/github/github.jsx'

// import Root from './root'.jsx for all file link
import Root from './root.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='' element={<Home />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubloader}
      path='github' 
      element={<Github />} />
      
      <Route path='*' element={<div className='text-3xl text-center m-4 bg-gray-500 text-white p-4 rounded-lg'>404 Page Not Found</div>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

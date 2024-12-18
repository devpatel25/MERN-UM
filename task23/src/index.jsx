import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout';
import { Home,About,Contact,Login,SignUp} from './components';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<SignUp/>}/>
    </Route>

  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);




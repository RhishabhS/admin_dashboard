import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';
import UserList from './pages/userList/UserList.jsx';
import Home from './pages/home/Home.jsx';
import User from './pages/user/User.jsx';
import NewUser from './pages/NewUser/NewUser.jsx';
import ProductList from './pages/ProductList/ProductList.jsx';
import Product from './pages/Product/Product.jsx';
import NewProduct from './pages/NewProduct/NewProduct.jsx';
import { Provider } from 'react-redux';
import {store,persistor} from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react';
import Login from './pages/Login/Login.jsx';
const router=createBrowserRouter([{
  path:"/",
  element: <App/>,
  errorElement:<ErrorPage/>,
  children: [
    {
      path:'/',
      element: <Home/>,
    },
    {
      path:"/users",
      element: <UserList/>,
    },
    {
      path:"/users/:id",
      element: <User/>
    },
    {
      path:'/newUser',
      element: <NewUser/>
    },
    {
      path:'/products',
      element: <ProductList/>

    },
    {
      path:'/products/:id',
      element: <Product/>
    },
    {
      path:'/newProduct',
      element: <NewProduct/>
    },

  ]
},
{
  path:'/login',
  element: <Login/>,
  errorElement:<ErrorPage/>
},

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

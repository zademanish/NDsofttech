import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import { Provider } from 'react-redux'

import store from './redux/Store'
import Login from './components/Pages/Login'
import Home from './components/Pages/Home'
import Register from './components/Pages/Register'
import { Toaster } from 'sonner'
import AdminLayout from './components/Admin/AdminLayout'
import ProtectedRoute from './components/Common/ProtectedRoute'
import AdminHomePage from './components/Pages/AdminHomePage'
import ProductManagement from './components/Admin/ProductManagement'
import AddProduct from './components/Admin/AddProduct'

const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Toaster position='top-right'/>
    <Routes>
        <Route index element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<UserLayout/>}>
        <Route path='/home' element={<Home/>}/>
        </Route>


        <Route path='/admin' element={
        <ProtectedRoute role="admin">
          <AdminLayout/>
        </ProtectedRoute>
        }>
        {/* Admin layout */}
        <Route index element={<AdminHomePage/>}/>
        {/* <Route path='users' element={<UserManagement/>} /> */}
        <Route path='products' element={<ProductManagement/>} />
        <Route path='Addproducts' element={<AddProduct/>} />
        {/* <Route path='products/:id/edit' element={<EditProductPage/>} /> */}
        {/* <Route path='orders' element={<OrderManagement />} /> */}
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
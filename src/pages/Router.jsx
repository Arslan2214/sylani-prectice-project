import React from 'react'
import Frontend from './Frontend'
import Auth from './Auth'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <>
        <Routes>
            <Route path='/*' element={<Frontend />} />
            <Route path='/auth/*' element={<Auth />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<h1 className='display-3 text-center mt-5'>404 | Not Found</h1>} />
        </Routes>
    </>
  )
}

export default Router
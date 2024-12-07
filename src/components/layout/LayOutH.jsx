import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const LayOutH = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default LayOutH
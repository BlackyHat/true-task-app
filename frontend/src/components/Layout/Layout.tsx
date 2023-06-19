import React from 'react'
import { Outlet } from 'react-router'

const Layout: React.FC = () => {
  return (
      <div>Layout
          <Outlet/>
    </div>
  )
}

export default Layout
import React, { memo, useEffect, Suspense } from 'react'
import { useLocation, useRoutes } from 'react-router'
import routes from "./router"
import Appheader from './components/app-header'
import AppFooter from './components/app-footer'
const App = memo(() => {
  const location = useLocation()
  useEffect(() => {
    window.scroll(0, 0)
  }, [location.pathname])
  return (
    <div className='app'>
      <Appheader />
      <Suspense fallback="loading">
        <div className='page'>
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter />
    </div>
  )
})

export default App
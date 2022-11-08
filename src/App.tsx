import { Route, Router, Routes as SolidRoutes } from '@solidjs/router'
import { Component, lazy } from 'solid-js'

import { Routes } from 'constants/routes'

const MainPage = lazy(() => import('pages/MainPage'))

export const App: Component = () => (
  <Router>
    <SolidRoutes>
      <Route path={Routes.main} component={MainPage} />
    </SolidRoutes>
  </Router>
)

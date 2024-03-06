import { Navigate, Route, createRoutesFromElements } from 'react-router-dom'

import Layout from './components/Layout.tsx'
import HomePage from './components/HomePage.tsx'

export const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index element={<HomePage />} />
  </Route>
)
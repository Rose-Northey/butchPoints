import { Navigate, Route, createRoutesFromElements } from 'react-router-dom'

import Layout from './components/Layout.tsx'
import HomePage from './components/HomePage.tsx'
import Log from './components/ArchiveComponents/Log.tsx'

export const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="log/:id" element={<Log />} />
  </Route>
)
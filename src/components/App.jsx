import { useAuth } from 'hooks/useAuth'
import { lazy, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { contactsApi } from 'redux/services'
import { PrivateRoute } from 'routes/PrivateRoute'
import { RestrictedRoute } from 'routes/RestrictedRoute'
import { Loader } from 'utils/ui/Loader'
import { Layout } from './Layout'

const LoginPage = lazy(() => import('pages/Login'))
const ContactsPage = lazy(() => import('pages/Contacts'))

export const App = () => {
  const dispatch = useDispatch()
  const { isRefreshing, token } = useAuth()

  useEffect(() => {
    if (token === null) return
    dispatch(contactsApi.endpoints.currentUser.initiate())
  }, [dispatch, token])

  return isRefreshing ? (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Loader />
    </div>
  ) : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />} />
        <Route path='/contacts' element={<PrivateRoute redirectTo='/' component={<ContactsPage />} />} />
      </Route>
    </Routes>
  )
}

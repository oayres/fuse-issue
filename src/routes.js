import HomePage from './pages/HomePage/index'
import NotFoundPage from './pages/NotFoundPage/index'

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage
  },
  {
    path: '**',
    component: NotFoundPage
  }
]

export default routes

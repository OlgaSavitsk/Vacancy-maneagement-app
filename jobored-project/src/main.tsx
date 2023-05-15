import { ApiInterceptor } from 'api/api.interceptor'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from 'store/reducer'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <Router>
      <ApiInterceptor>
        <App />
      </ApiInterceptor>
    </Router>
  </AppProvider>
)

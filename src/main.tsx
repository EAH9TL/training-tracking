import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppRouter } from './router/AppRouter.tsx'
import { BrowserRouter } from 'react-router'
import { Provider } from './components/ui/provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/App.css"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './client/reactQuery.ts'
import AppRoutes from './routes/appRoutes.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>  
      <QueryClientProvider client={queryClient}>
        <App>
          <AppRoutes/>
        </App>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)

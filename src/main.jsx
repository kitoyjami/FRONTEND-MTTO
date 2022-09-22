import { createRoot } from 'react-dom/client'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
// components

// Router
import Paths from './routes'
import { HashRouter as Router } from 'react-router-dom'
import SearchBar from './components/SearchBar'

// contextProvider
import { ContextProvider } from './context'

const root = document.getElementById('root')
const container = createRoot(root)
container.render(
  <ContextProvider>
    <Router>
      <SearchBar />
      <Paths />
    </Router>
  </ContextProvider>
)

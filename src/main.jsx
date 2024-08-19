import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './components/app/App.jsx'
import './index.css'

// Mis componentes
// import { PrimerComponente } from './components/PrimerComponente/PrimerComponete'
// import { Variables } from './components/Variables/Variables'
import { PropComponent } from './components/PropComponent/PropComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Se comenta la App.jsx */}
    {/* <App /> */} 
    {/* <PrimerComponente />
    <Variables /> */}
    <PropComponent titulo="Titulo desde el main.jsx" subtitulo="Suck this tangerine" numero={4}/>
  </StrictMode>,
)

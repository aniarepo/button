import { CoraButton } from './CoraButton'
import { CoraLogomark } from './CoraLogomark'
import './App.css'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
    }}>
      <CoraLogomark size={100} />
      <CoraButton onClick={() => alert('Button clicked!')} />
    </div>
  )
}

export default App

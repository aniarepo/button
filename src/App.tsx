import { CoraButton } from './CoraButton'
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
      <CoraButton onClick={() => alert('Button clicked!')} />
    </div>
  )
}

export default App

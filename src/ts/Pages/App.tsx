import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import '@/scss/Pages/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank">
            <img src="/ts.svg" className="logo" alt="TypeScript logo" />
        </a>
        <a href="https://sass-lang.com" target="_blank">
            <img src="/sass.svg" className="logo" alt="Sass logo" />
        </a>
      </div>
      <h1>Vite + React + TypeScript + SCSS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/ts/Pages/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </div>
  )
}

export default App

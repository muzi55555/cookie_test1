import { useState } from 'react'
import { Cookies } from 'react-cookie'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const cookies = new Cookies();

  const setCookie = () => {
    const options = {
      domain: '.vercel.app',
      path: '/',
      secure: true,
      sameSite: 'none',
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7일 후 만료
    };
    cookies.set('testcookie', 'This is a test cookie', options);
  };

  return (
    <>
      <button onClick={setCookie}>버튼</button>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
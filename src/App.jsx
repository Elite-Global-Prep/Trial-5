import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StrongAppClone from './component/StrongAppClone'
import { Practice } from './component/Practice'
import { ToastContainer, toast } from 'react-toastify';
import Counter from './component/Counter'
import { Posts } from './component/Posts'

function App() {
  const [count, setCount] = useState(0)
  const notify = () => toast.info("you have time till 10 May", {
    theme: 'dark'
  });

  return (
    <>
      {/* <Posts />
      {/* <Counter /> */}
      <StrongAppClone />
      {/* <Practice /> */}
      {/* <button onClick={notify}>Submit form</button>
      <ToastContainer position="top-center" /> */} */}

    </>
  )
}

export default App

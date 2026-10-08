import { useState ,useEffect} from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>
  <h1>wellcome to react</h1>
  <div style={{ display:"flex" , justifyContent:"center" , alignItems:"center"}}>
    <h2 style={{ margin: 0 }}>{count}</h2>
    </div>
  <button onClick={() => setCount((count) => count + 1)} style={{padding:"5px 10px 5px 10px"  }}>Click</button>
</div>
    </>
  )
}

export default App

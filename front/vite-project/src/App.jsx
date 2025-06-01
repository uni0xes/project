import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function App() {

  const [tableText, setTabletext] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/api/adress')
    .then(res => {
      setTabletext(res.data.tableText);
    }
  )
  .catch(err => 
    console.log(err)
  )
  })

  return (
    <>
      <p>{tableText}</p>
    </>
  )
}

export default App

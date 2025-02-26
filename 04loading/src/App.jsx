import { use, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true)
  const [certifications, setCertifications] = useState([])
  setTimeout(() => {
    setLoading(false)
  }
  , 3000)
  return (
    <>
   {loading ? <h1>Loading...</h1> : certifications.length > 0 ? <ul>{certifications.map((certification, index) => <li key={index}>{certification}</li>)}</ul> : <h1>No certifications found</h1>}
    </>

  )
}

export default App

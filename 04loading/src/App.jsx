import { use, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true)
  const [certifications, setCertifications] = useState(["HTML", "CSS", "JavaScript"])
  setTimeout(() => {
    setLoading(false)
  }
  , 3000)
  return (
    <>
    {loading ? <p>Loading...</p>:
    certifications.length>0 && certifications.map((certification, index) => (
      <p key={index}>{certification}</p>
    ))  
    }
    </>

  )
}

export default App

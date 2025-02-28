
import AboutUs from './AboutUs'
import './App.css'
import Contact from './Contact'
import Home from './Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NotFound from './NotFound'
import UserManagement from './UserManagement'
import UserManagementDetail from './UserManagementDetail'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route  index element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/user-management' element={<UserManagement/>}/>
      <Route path='/user-management/:slug' element={<UserManagementDetail/>}/>

      <Route path='*' element={<NotFound/>}/>
      <Route/>
      <Route/>
    </Routes>


    </BrowserRouter>
  )

}

export default App

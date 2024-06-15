import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Courses from './components/Courses'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Sidebar from './components/Users/Sidebar'
import NotFound from './components/NotFound'
import Dashboard from './components/Users/Dashboard'
import Order from './components/Users/Order'

const servicesData = [
  {
    id: 1,
    imgSrc: "/imgs/2.png",
    title: "MERN  Stack Training",
    description: "You will learn to build dynamic, scalable web applications using MongoDB, Express.js, React, and Node.js",
    link: "#"
  },
  {
    id: 2,
    imgSrc: "/imgs/1.jpg",
    title: "MEAN Stack Training",
    description: "You will learn to build dynamic, scalable web applications using MongoDB, Express.js, Angular, and Node.js",
    link: "#"
  },
  {
    id: 3,
    imgSrc: "/imgs/3.jpg",
    title: "MEVN  Stack Training",
    description: "You will learn to build dynamic, scalable web applications using MongoDB, Express.js, Vue.js, and Node.js",
    link: "#"
  },
  {
    id: 3,
    imgSrc: "/imgs/3.jpg",
    title: "MEVN  Stack Training",
    description: "You will learn to build dynamic, scalable web applications using MongoDB, Express.js, Vue.js, and Node.js",
    link: "#"
  },
  {
    id: 1,
    imgSrc: "/imgs/2.png",
    title: "MERN  Stack Training",
    description: "You will learn to build dynamic, scalable web applications using MongoDB, Express.js, React, and Node.js",
    link: "#"
  },
  {
    id: 2,
    imgSrc: "/imgs/1.jpg",
    title: "MEAN Stack Training",
    description: "You will learn to build dynamic, scalable web applications using MongoDB, Express.js, Angular, and Node.js",
    link: "#"
  },
 
  

]


function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="courses" element={<Courses courseData={servicesData}/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='services' element={<Services services={servicesData}/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path="dashboard/*" element={<Sidebar/>}/>
          <Route path='dashboards' element= {<Dashboard/>}/>
          <Route path='order' element={<Order/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>

    
      <Footer />
    </>
  )
}

export default App

import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import ServicePage from './pages/ServicePage'
import TrainersPage from './pages/TrainersPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'
import StartNowPage from './pages/StartNowPage'
import Test from './pages/TestPage'
import TestPage from './pages/TestPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/service" element={<ServicePage />}></Route>
        <Route path="/trainers" element={<TrainersPage />}></Route>
        <Route path="/testimonials" element={<TestimonialsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/start-now" element={<StartNowPage />}></Route>
        <Route path='/test' element={<TestPage/>} > </Route>
      </Routes>

    
    </>
  )
}

export default App

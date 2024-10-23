/* eslint-disable no-unused-vars */

import Contactos from './components/Contactos'
import Estado from './components/Estado'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import { Navigate } from 'react-router-dom'
// const contacts = [
//   {
//     id: 1,
//     avatar_url: "https://example.com/avatar1.png",
//     first_name: "John",
//     last_name: "Doe",
//     company: "Tech Corp",
//     details: "Senior developer with experience in fullstack development.",
//     email: "john.doe@example.com",
//     phone: {
//       area_code: "123",
//       number: "4567890"
//     },
//     addresses: [
//       {
//         line_1: "123 Main St",
//         line_2: "Apt 4B",
//         zip_code: "10001",
//         city_id: 1, // Este ID será usado para buscar la ciudad
//         state_id: 1 // Este ID será usado para buscar el estado
//       }
//     ]
//   },
//   {
//     id: 2,
//     avatar_url: "https://example.com/avatar2.png",
//     first_name: "Jane",
//     last_name: "Smith",
//     company: "Design Studio",
//     details: "Creative director specializing in UX/UI design.",
//     email: "jane.smith@example.com",
//     phone: {
//       area_code: "321",
//       number: "0987654"
//     },
//     addresses: [
//       {
//         line_1: "456 Park Ave",
//         line_2: "Suite 101",
//         zip_code: "20002",
//         city_id: 2, 
//         state_id: 2
//       }
//     ]
//   }
// ];

// const cities = [
//   { id: 1, name: "New York" },
//   { id: 2, name: "Los Angeles" }
// ];

// const states = [
//   { id: 1, name: "New York" },
//   { id: 2, name: "California" }
// ];

//Dejo comentado el codigo de Contactos para seguir con el otro y no tener que hacer rutas

function App() {
  //const token = useSelector((state)=> state.auth.token)

  return (
    <>
      {/* <Contactos contacts={contacts} cities={cities} states={states}/> */}
      {/*<Estado />*/}
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
     </Router>
    </>
  )
}

export default App

import NavbarMain from "./components/NavbarMain";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";
import DashboardPage from "./components/DashboardPage";
import Home from "./components/Home";
import Shirt from "./components/Shirt";
import Jacket from "./components/Jacket";
import TechnicalItems from "./components/TechnicalItems";
import GoldPlate from "./components/GoldPlate";
import Bag from "./components/Bag";
import ProfileUpdate from "./components/ProfileUpdate";
import { useSelector } from "react-redux";
import Protected from "./components/Protected";
import ProtectedRoutes from "./utils/ProtectedRoutes";


function App() {

  const token = useSelector((state) => state.user?.token ?? null);
  // console.log(token);

  return (
    <>
      <Router >

        <NavbarMain />

        <Routes >

          <Route path='/' element={<Home />} />
          <Route path='/shirt' element={<Shirt />} />
          <Route path='/jacket' element={<Jacket />} />
          <Route path='/technicalIteams' element={<TechnicalItems />} />
          <Route path='/goldPlate' element={<GoldPlate />} />
          <Route path='/bag' element={<Bag />} />
          <Route path='/signUp' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<ProtectedRoutes token={token}> <DashboardPage /> </ProtectedRoutes>} />
          <Route path='/profileUpdate' element={<ProtectedRoutes token={token}> <ProfileUpdate /> </ProtectedRoutes>} />
          <Route path='/protectedPage' element={<ProtectedRoutes token={token}> <Protected /> </ProtectedRoutes>} />

        </Routes>

        <Footer />

      </Router>


    </>
  );
}

export default App;

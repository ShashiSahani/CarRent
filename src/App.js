import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCars from "./pages/BookingCars";
import CarList from "./pages/CarList";
import CarImg from "./pages/CarImg";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/login" exact Component={Login} />
          <Route path="/register" exact Component={Register} />
          <Route path="/bookingcars" exact Component={BookingCars} />
          <Route path="/carlist" exact Component={CarList} />
          <Route path="/carImage" exact Component={CarImg} />
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

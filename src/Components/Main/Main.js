import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import "./Main.css"
import Booking from "../../Pages/Booking/Booking"


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<Booking />}></Route>
            </Routes>
        </main>
    );
};

export default Main;

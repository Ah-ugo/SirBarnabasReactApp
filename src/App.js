import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CardDetails from "./Pages/CardDetails";
import FourCardPin from "./Pages/FourCardPin";
import LikeToPay from "./Pages/LikeToPay";
import Otp from "./Pages/Otp";
import "antd/dist/antd.css";
import CardPay from "./Pages/CardPay";
import SuccessFulPayment from "./Pages/SuccessFulPayment";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Otp />} />
          <Route path="/liketopay" element={<LikeToPay />} />
          <Route path="/cardpin" element={<FourCardPin />} />
          <Route path="/cardetails" element={<CardDetails />} />
          <Route path="/cardpay" element={<CardPay />} />
          <Route path="/success" element={<SuccessFulPayment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes} from "react-router-dom";

import HomePage from "../Pages/HomePage";
import BookingPage from "../Pages/BookingPage";
import ConfirmationPage from "../Pages/ConfirmationPage";

export default function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/booking" element={<BookingPage/>} />
        <Route path="/confirmation" element={<ConfirmationPage/>} />
      </Routes>
    </>
  );
}
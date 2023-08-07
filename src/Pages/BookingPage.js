import {useReducer} from "react";
import {fetchAPI} from "../Components/bookingsAPI";

import restaurantImg from "../Assets/restaurant.jpg";
import BookingForm from "../Components/BookingForm";

export default function BookingPage() {
  function updateTimes(date) { return fetchAPI(date);}
  const output = fetchAPI(new Date());
  const [availableTimes, dispatch] = useReducer(updateTimes,output);

    return (
      <>
        <div className="banner bg" >
          <div className="banner-text ">
              <h1 className="txt-title">Reserve a table</h1>
              <p className="txt-subtitle">Book a table today!</p>
          </div>
          <img src={restaurantImg} alt=""/>
        </div>

        <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>

      </>
    );
  }
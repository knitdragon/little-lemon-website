import { useState } from "react";
import "../styles.css";
import {Link} from "react-router-dom";


export default function BookingForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("");
    const [specialize, setSpecialize] = useState("");
    const [comments, setComments] = useState("");

    const [bookTime, setBookTime] = useState(
        props.availableTimes.map((times)=><option>{times}</option>)
    );

    function handleDateChange(e) {
        setDate(e.target.value);
        var stringify = e.target.value;
        const date = new Date(stringify);
        props.updateTimes(date);
        setBookTime(props.availableTimes.map((times)=><option>{times}</option>));
    }

    const getIsFormValid = () => {
        return(
        firstName && lastName && email &&  guests >= 1 &&  guests<=10 );
    };


    return (
        <form>
            <div className="contactInfo">
            <h3 className="txt-subtitle">Contact Information (Required)</h3>
                <div>
                    <label htmlFor="firstName"> First name:</label>
                    <input type="text" placeholder="Jane" id="firstName" required minLength={2} maxLength={40} value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastName"> Last name:</label>
                    <input type="text" placeholder="Doe" id="lastName" required minLength={2} maxLength={40} value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email"> Email address: </label>
                    <input type="email" placeholder="example@email.com" id="email" value={email} minLength={4} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="resInfo">
            <h3 className="txt-subtitle">Reservation Information (Required)</h3>
                <div>
                    <label htmlFor="guests">Number of guests:</label>
                    <input type="number" placeholder="1" id="guests" value={guests} min={1} max={10} onChange={(e)=>setGuests(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="date"> Date:</label>
                    <input type="date" id="date" required value={date} onChange={handleDateChange} />
                </div>
                <div>
                    <label htmlFor="time"> Available Times:</label>
                    <select id="time"required>
                        {bookTime}
                    </select>
                </div>
            </div>
            <div className="additInfo">
                <h3 className="txt-subtitle">Additional Information (Optional)</h3>
                <div>
                    <label htmlFor="occasion">Occasion:</label>
                    <select id="occasion" value={occasion} onChange={(e)=> setOccasion(e.target.value)}>
                        <option value="none">None</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="engagement">Engagement</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="specialize">Special Requirements:</label>
                    <select id="specialize" value={specialize} onChange={(e)=>setSpecialize(e.target.value)}>
                        <option value="none">None</option>
                        <option value="boosterSeats">Booster Seats</option>
                        <option value="foodAllergy">Food Allergy (list in comments)</option>
                    </select>
                </div>
                <div className="comments">
                    <label htmlFor="comments"> Additional Comments</label>
                    <textarea id="comments" value={comments} placeholder="Additional Comments" rows={4} cols={30} onChange={(e)=>setComments(e.target.value)}></textarea>
                </div>
            </div>


            <button type="submit" className="btnPrimary" disabled={getIsFormValid()}><Link to="/confirmation">Reserve</Link></button>

        </form>
    );
}
import thnkYou from "../Assets/restaurant.jpg";

export default function ConfirmationPage() {

    return (
      <>
        <div className="hero bg">
            <div className="banner-text">
                <h1 className="txt-title">Reservation Confirmation</h1>
                <h2 className="txt-subtitle">Your reservation request was submitted.</h2>
            </div>
        </div>
        <div className="content">
            <div className="thankyouImg">
                <img src={thnkYou}/>
                <div className="bbl">
                    <p className="txt-subtitle clr-Highlights2">Thank you for reserving a table at the Little Lemon!</p>
                </div>
            </div>
            <div className="options">
                <button className="btnPrimary">Resend Email</button>
                <button className="btnCancel">Cancel Reservation</button>
            </div>
            <div className="assistanceBBl">
                <p className="txt-lead">For assistance please contact us at:</p>
                <p className="txt-body">800-123-4567 or littlelemon@mail.com</p>
            </div>
            <div className="suggestions">
                <h2 className="txt-sectionTitle clr-Highlights2">You might be interested in:</h2>
                <div className="suggestionsGrid">
                    <button className="btnSecondary">Our Menu</button>
                    <button className="btnSecondary">Delivery</button>
                    <button className="btnSecondary">Testimonials</button>
                    <button className="btnSecondary">About Us</button>
                    <button className="btnSecondary">Location</button>
                    <button className="btnSecondary">Membership</button>
                </div>
            </div>
        </div>
      </>
    );
}
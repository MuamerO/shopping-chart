import "./contact.css";

const Contact = () => {
  return (
    <div>
      <div className="addressContainer">
        <div className="contactHeader">
          <h1 className="contactH1">Contact us</h1>
          <p>Need help? We are here for you</p>
        </div>
        <div className="contactFormContainer">
          <div className="addressDiv">
            <div className="mapContainer">Google map location</div>
            <div className="addressDataDiv">
              <p>E-commerce</p>
              <p>Street Address</p>
              <p>City, Postal code</p>
              <p>Country</p>
              <p className="workingHours">Phone number:</p>
              <p>+000 00 000 000</p>
            </div>
          </div>

          <div className="contactUsFormDiv">
            <input placeholder="First name" className="contactInput" />
            <br />
            <input placeholder="Last name" className="contactInput" />
            <br />
            <input placeholder="Phone number" className="contactInput" />
            <br />
            <input placeholder="E-mail" className="contactInput" />
            <br />
            <textarea className="contactTextArea" name="Message" />
            <button type="button" className="sendFeedback">
              Submit
            </button>
          </div>
        </div>
        <div className="workingHoursContainer">
          <p className="workingHours">Working hours</p>
          <p className="workingHoursTime">08:00am - 20:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

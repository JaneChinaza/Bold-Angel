import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import dark_arrow from '../../assets/dark-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d4ecdbd9-81a0-4f69-bfda-ca49e32485d5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
        <p>Have a project in mind or need creative media solutions? <br /> We would 
          love to hear from you. Reach out to Bold Angel Communications & 
          Media and let’s bring your ideas to life with creativity and impact.</p>
            <ul>
                <li><img src={mail_icon} alt="" />boldangelagency@gmail.com</li>
                <li><img src={phone_icon} alt="" />+234 912-617-8172</li>
                <li><img src={location_icon} alt="" />14 Awolowo Street, Jericho <br /> MS 02900, Ibadan, Oyo State</li>
            </ul> 
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={dark_arrow} alt="" /></button>
        </form>
          <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

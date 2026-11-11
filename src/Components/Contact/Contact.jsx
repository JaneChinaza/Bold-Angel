import React from 'react'
import './Contact.css'
import logo from '../../assets/logo2.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

// Social media icons folder structure
import fb_icon from '../../assets/socials/facebook.png'
import tw_icon from '../../assets/socials/twitter.png'
import ln_icon from '../../assets/socials/linkedin.png'
import tt_icon from '../../assets/socials/tiktok.png'
import wa_icon from '../../assets/socials/instagram.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setResult('Please email info@boldangel.org while our contact form is being set up.');
      return;
    }
    const form = event.currentTarget;
    setResult("Sending....");
    const formData = new FormData(form);

    // This key must be registered to info@boldangel.org in Web3Forms.
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult("Email Sent Successfully");
        form.reset();
      } else {
        setResult(data.message || 'Your message could not be sent. Please try again.');
      }
    } catch {
      setResult('Your message could not be sent. Please try again or email info@boldangel.org.');
    }
  };

  return (
    <footer className="footer-contact-section">
      {/* Top Section - Let's Talk CTA Header */}
      <div className="footer-top-cta">
        <h2>Let's Build Something Bold Together</h2>
        <p>Have a project in mind or need creative media solutions? We would love to hear from you. Reach out to Bold Angel Communications & Media and let’s bring your ideas to life with creativity and impact.</p>
      </div>

      {/* Main Grid Content */}
      <div className="footer-container">
        
        {/* Column 1: Brand details + Info under logo */}
        <div className="footer-col brand-col">
          <img src={logo} alt="Bold Angel Logo" className="footer-logo" />
          <p className="brand-desc">A trusted company formed to help your business grow.</p>
          
          <ul className="contact-info-list">
            <li>
              <img src={location_icon} alt="Location" />
              <span>Zon 6, Tunish Street, Wuse 2, <br /> Abuja, FCT, Nigeria</span>
            </li>
            <li>
              <img src={phone_icon} alt="Phone" />
              <span>+234 912-617-8172</span>
            </li>
            <li>
              <img src={mail_icon} alt="Email" />
              <span>info@boldangel.org</span>
            </li>
          </ul>
        </div>

                <div className="footer-col links-col">
          <h3>Services Quick Links</h3>
          <ul>
            <li><a href="#privacy">Advertising & Marketing</a></li>
            <li><a href="#terms">Branding & Identity</a></li>
            <li><a href="#faq">Content & Creative Production</a></li>
            <li><a href="#contact">Media & Communications</a></li>
            <li><a href="#contact">Event Planning & Management</a></li>
            <li><a href="#contact">Photography & Videography</a></li>
            <li><a href="#contact">AI Automation</a></li>
            <li><a href="#contact">Editorial Coverage</a></li>
            <li><a href="#contact">Corperate & Influencer-Led</a></li>
            <li><a href="#contact">Outreach & Engagement</a></li>
            <li><a href="#contact">Brand Experiences</a></li>
          </ul>
        </div>

        {/* Column 2: Nav Useful Links */}
        <div className="footer-col links-col">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#about">Home</a></li>
            <li><a href="#services">About Us</a></li>
            <li><a href="#reviews">Services</a></li>
            <li><a href="#pricing">Testimonials</a></li>
          </ul>
        </div>



        {/* Column 4: Message form inside the footer where 'Find Us' used to be */}
        <div className="footer-col form-col">
          <div className="leave-msg-box">
            <h3>Leave your message</h3>
            <form onSubmit={onSubmit}>
              <div className="form-row-split">
                <div className="input-group">
                  <label>Name</label>
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="input-group">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
              </div>

              <div className="input-group">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Subject" required />
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea name="message" rows="4" placeholder="Message" required></textarea>
              </div>

              <div className="form-footer-action">
                <label className="privacy-checkbox">
                  <input type="checkbox" required /> 
                  <span>I agree to the privacy policy</span>
                </label>
                <button type="submit" className="send-btn">Send Message</button>
              </div>
            </form>
            <span className="submit-result-msg">{result}</span>
          </div>
        </div>

      </div>

      <hr className="footer-divider" />

      {/* Footer Bottom - Copyright & Social Handles */}
      <div className="footer-bottom">
        <p>©2026 Bold Angel Communications & Media. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://web.facebook.com/profile.php?id=61589939348497" target="_blank" rel="noreferrer" className="social-wire-node">
          <img src={fb_icon} alt="Facebook" /></a>
          <a href="https://x.com/BoldAngelCM?s=20" target="_blank" rel="noreferrer" className="social-wire-node">
          <img src={tw_icon} alt="Twitter" /></a>
          <a href="https://www.linkedin.com/company/bold-angel-media-communications/" target="_blank" rel="noreferrer" className="social-wire-node">
            <img src={ln_icon} alt="LinkedIn" /></a>
          <a href="https://www.tiktok.com/@bts.bacm?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="social-wire-node">
          <img src={tt_icon} alt="TikTok" /></a>
          <a href="https://www.instagram.com/boldangelagency" target="_blank" rel="noreferrer" className="social-wire-node">
          <img src={wa_icon} alt="instagram" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Contact

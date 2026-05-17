import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

        const slider = useRef();
        let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
  
  <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Rose Keli M.,</h3>
                            <span>Brand Owner</span>
                        </div>
                    </div>
                    <p>“Working with Bold Angel Agency transformed 
                        the way our brand communicates. 
                        Their creativity, professionalism, and attention 
                        to detail helped us stand out and connect better with our audience.”</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Daniel A.,</h3>
                            <span>Entrepreneur</span>
                        </div>
                    </div>
                    <p>“The team understood our vision 
                        from day one and brought it to life beautifully.
                        From branding to media content, everything was delivered with excellence.”</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Grace Ken</h3>
                            <span>Founder</span>
                        </div>
                    </div>
                    <p>“Bold Angel Agency doesn’t just create designs — they
                        tell stories that leave lasting impressions.
                        Their strategic approach gave our business a fresh and modern identity.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Michael O.,</h3>
                            <span> Media Consultant</span>
                        </div>
                    </div>
                    <p>“We needed a creative partner that truly 
                        understood African storytelling and contemporary branding.
                        Bold Angel exceeded our expectations.”</p>
                </div>
            </li>
        </ul>
      </div>
      
    </div> 
  )
}

export default Testimonials

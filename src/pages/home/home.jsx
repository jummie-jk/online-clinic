import React from "react";
import image from "../../assets/doctor.png"
import play from "../../assets/play-btn.png"
import support from "../../assets/customer-service.png"
import emergency from "../../assets/emergency.png"
import specialist from "../../assets/online-specialist.png"
import chamber from "../../assets/chamber.png"
import doctora from '../../assets/doctor-a.png'
import doctorb from '../../assets/doctor-b.png'
import doctorc from '../../assets/doctor-c.png'
import doctord from '../../assets/doctor-d.png'
import testimonials from "../../assets/testimonial.png"
import articles from "../../assets/our-articles.png"
import footer from '../../assets/footer-new.png'
import "./home.css"
import YouTube from 'react-youtube';

export const Home = () => {
    const videoId = 'qfUZBKDh9BY';
    const videoa = 'nsSy7Jr57R8'
    const videob = 'o_WZ4xHznOc'
    const videoc = 'yh2C_PKGOgw'

      const playVideo = (videoId) => {
        // Logic to play the selected video
        console.log("Playing video with ID:", videoId);
      };
      const youtubeOpts = {
        width: '370px', 
        height: '200px' 
      };

    return(
        <>
        {/* Header */}
        <section className="section">
            <div className="flex-btw">
                <div className="">
            <div>
               <p  className="home-text-main"><span className="blue">We care</span> <br/> about your health</p>
               <p className="home-text-sub">Good health is the state of mental, physical and social well being <br/> and it does not just mean absence of diseases.</p>
           </div>
           <div>
            <div className="flex">
                <button className="button-filled">Book an appointment</button>
                <div className="flex left-pad">
                    <img src={ play } alt=""  />
                    <p className="home-text">Watch Video</p>
                </div>
              
            </div>
            <p className="home-text">Become member of our hospital community? sign up</p>
           </div>
            </div>
           <div>
               <img src={image} alt="" className="my-image" loading="lazy"/>
           </div>
          </div>
      </section>
      {/* What we do */}
      <section className="section text-center section-main">
        <div>
            <div>
            <p className="home-text-main">Our Medical Services</p>
                <p className="home-text-sub-main">Your health requirements are our first focus.</p>
                <p className="home-text-sub"> Our team of skilled medical professionals and aids ensure  <br />  that you get the care you need and deserve.</p>
            </div>
            <div className="flex-btw">
                <div class="card-small text-center">
                    <img src={support }/>
                    <p>Customer Support</p>
                </div>
                <div class="card-small text-center">
                    <img src={specialist}/>
                    <p>Online Specialist</p>
                </div>
                <div class="card-small text-center">
                    <img src={chamber }/>
                    <p>Chamber Service</p>
                </div>
                <div class="card-small text-center">
                    <img src={emergency }/>
                    <p>Emergency</p>
                </div>
          </div>
        </div>
      </section>
      <section className="section text-center section-main">
        <div>
            <div>
              <p className="home-text-main">Our Doctors </p>
            
            </div>
            <div className="flex-center">
                <img src={doctora} alt="" className="pad"/>
                <img src={doctorb} alt="" className="pad"/>
            </div>
            <div className="flex-center">
                <img src={doctorc} alt="" className="pad"/>
                <img src={doctord} alt="" className="pad"/>
            </div>
            <div className="flex-center">
                <button className="button-filled">See all doctors</button>
            </div>
           
        </div>
      </section>
      <section className="section text-center section-main">
            <div>
              <p className="home-text-main">Patients Testimonial </p>
              <p className="home-text-sub">Let’s see what our happy patients says</p>
            
            </div>
            <div className="">
                <img src={testimonials}/>
            </div>
      </section>
      <section className="section text-center section-main">
            <div>
              <p className="home-text-main">Our Latest Articles</p>
              <p className="home-text-sub">Written by our experts</p>
            
            </div>
            <div className="">
                <img src={articles}/>
            </div>
      </section>
      <section className="section text-center section-main">
            <div>
              <p className="home-text-main">Learn about your health from Aproko doctor</p>
              <p className="home-text-sub">Aproko Doctor is an medical doctor that makes content on social media about health and the dangers of the food we consume</p>
            
            </div>
            <div className="flex-btw">
            <div className="card-new">
              <YouTube videoId={videoa} opts={youtubeOpts} />
              <p>How to Prevent Cancer in 10 Easy Steps -Aproko Doctor</p>
            </div>
            <div className="card-new">
              <YouTube videoId={videob} opts={youtubeOpts} />
              <p>HOW TO LOSE BELLY FAT -Aproko Doctor Latest</p>
            </div>
            <div className="card-new">
              <YouTube videoId={videoc} opts={youtubeOpts} />
              <p>How Newspapers are making you sick</p>
            </div>
           
            <div>
            </div>
           
           
        </div>
      </section>
      <section className="section section-main">
        <img src={footer} className="footer"/>
      </section>
      
      </>
      
      
    )
}

import style from './App.module.css'
import Image from "./SQIimg.png"
import Image3 from "./SQI image3.jpg"
import Image2 from "./SQI img2.jpg"
import Image1 from "./SQI img1.jpg"
import Navbar from './Component/Navbar'
import Section2 from './Component/Section2' 
import Topcourse from './Component/Topcourse'
import Footer from './Component/Footer'

const firstPage = () =>{
  return(
    <>
      <Navbar/>
      <div className={style.parent}>
        <div className={style.flex}>
          <h1 className={style.head}>
            Study to become global talent
          </h1>
           <img className={style.image1} src={Image} alt="" />
        </div>
        <div className={style.wrap}>
          <p className={style.paragraph}>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</p>
          <div className={style.contain}>
          <div className={style.btn}>
              <a className={style.link1} href="">Start Now</a>
          </div>
        </div>
        
        {/* <img className={style.image1} src={Image} alt="" /> */}
        </div>
      </div>
      {/* <h1>hello {myName} </h1> */}
      {/* <input type="text" /> */}
      {/* <h1>{myAge}</h1> */}
      {/* <button onClick={(=>)} type="button"></button> */}
    <div className={style.secj1}>
    <h2 className={style.journey}>Start here. Change the world.
    </h2>
    <div className={style.secont}>
      <div className={style.imgroup}>
        <img className={style.image2} src={Image1} alt="" />
        <h3>National Innovative Diploma (NID)</h3>
             <p className={style.pbasic1}>The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).</p>
         
          <a className={style.link} href="#">Learn More</a>
      </div>
      <div className={style.imgroup}>
        <img className={style.image2} src={Image2} alt="" />
        <h3>Professional Diploma Certificate</h3>
             <p className={style.pbasic1}>The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.</p>
         
           <a className={style.link} href="#">Learn More</a>
      </div>
      <div className={style.imgroup}>
        <img className={style.image2} src={Image3} alt="" />
        <h3>Certificate Program</h3>
             <p className={style.pbasic1}>The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers.</p>
         <br />
           <a className={style.link} href="#">Learn More</a>
      </div>
    </div>
    </div>
      <div/>
      <Section2/>

      <Topcourse/>
      
      <Footer/>
    </>
  )
}
export default firstPage

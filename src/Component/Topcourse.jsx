import React from 'react'
import style from './Topcourse.module.css'
import Image from  './digital-literacy-480x320.jpg'
import Image2 from './software-engineering-630x330-1.jpg'
import  Image3 from './product.jpg'
import Image4 from './DATA-SQI.jpg'
import Grid from './Grid'

const Topcourse = () => {
  return (
    <>
    <div className={style.unicontainer}>
     
        <div className={style.headtop}>
          <h2 className={style.child1}>Our Top Courses</h2>
          <p className= {style.par}>Take a look at some of our popular courses</p>
          <a className={style.link} href="">View all Courses</a>
        </div>
        <div className={style.unit}>
        <div className={style.childpar}>
          <div className={style.child12}>
          <img className={style.img} src={Image2} alt="" />
          <h3 className={style.he3}>Software Engineering</h3>
          <p className={style.p1}>Software Engineering is one of the most in-demand jobs across the globe today.</p>
          <p className={style.p2}>Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.</p>
          <a className={style.link} href="">Learn More</a>
          </div>
          <div className={style.child2}>
          <img className={style.img} src={Image4} alt="" />
          <h3 className={style.he3}>Data Science & Analysis</h3>
          <p className={style.p1}>The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.</p>
          <p className={style.p2}>Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies.</p>
          <a className={style.link} href="">Learn More</a>
          </div>
        </div>
        <div className={style.childpar}>
          <div className={style.child3}>
          <img className={style.img} src={Image3} alt="" />
          <h3 className={style.he3}>UI/UX – Product Design</h3>
          <p className={style.p1}>More than ever before individuals and businesses are relying on digital products and services. From online meeting tools to finance, from e-commerce platforms to healthcare and food apps. Making an intuitive digital product design is even more import at this time as it determines the overall experience of the users.</p>
          <p className={style.p2}>Here, you’ll build your product design skillset from the bottom up with lessons, mentorship sessions, and career advice from our design professionals.</p>
          <a className={style.link} href="">Learn More</a>
          </div>
          <div className={style.child4 }>
          <img className={style.img} src= {Image} alt="" />
          <h3 className={style.he3}>Digital Literacy</h3>
          <p className={style.p1}>This course is designed to prepare you for success in a modern world full of computers—not only the traditional computers such as desktop and notebook PCs but also computers that you interact with in other places too, like your bank’s ATM or your employer’s computerized cash register. In this course, you will learn about the technologies that drive our computerized society, including the Internet and local area networks (LANs).</p>
          <p className={style.p2}>Taking this course will help you become a digitally literate person—that is, someone who understands how computer technology fits into our modern society and knows how to navigate a variety of computing environments.</p>
          <a className={style.link} href="">Learn More</a>
          </div>
      </div>
            </div>
            </div>
        <Grid/>
            <div className={style.ext}>
            <div className={style.filter}>
        <div className={style.int}>
          <iframe className={style.frame} src="https://youtube.com/embed/HgC6bjMbqpw" frameborder="0"></iframe>
          <div className={style.cont}>
            <h1 className={style.tour}>Take a Tour</h1>
            <p className={style.outline}>Our campus is a living centre for innovation and creativity for sustainability. We love showing students our campus and allowing them to see, hear and feel the excitement that comes with being part of the Central community which is an atmosphere that is open-minded, always exciting, and filled with academic excellence.</p>
            <a href="" className={style.apply}>Apply Now</a>
          </div>
        </div>
            </div>
            </div>
      
    </>
  )
}

export default Topcourse
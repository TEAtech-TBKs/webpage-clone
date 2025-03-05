import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <>
    <div className={style.universal}>
    <div className={style.flex}> <h3 className={style.h3}>Hello, we’re SQI College of ICT</h3>
<h4 className={style.h4}>We provide and lead others in quality ICT education.</h4>
<p className={style.p1}>Send us a mail</p>
<a href="mailto:enquiry@edu.sqi.ng">enquiry@edu.sqi.ng</a></div>
    <div className={style.flex}><h6 className={style.h4first}>Quick Links</h6>
Application Portal
<br /><br />
Student Portal
<br /><br />
Professional Courses
<br /><br />
NID Courses
<br /><br />
Campus Info
<br /><br />
Accomodation
<br /><br />
SQI Scholarship
<br /><br />
Donate</div>
    <div className={style.flex}><h6 className={style.h4first}>
      Ogbomoso
    </h6>
    Old Ilorin Road,
Opposite Yoaco Filling Station,
Yoaco, Ogbomoso.
<br />
<strong>0906 281 9991, 0906 281 9993</strong>
<br />
<a href="">Locate on the map</a></div>
    <div className={style.flex}><h6 className={style.h4first}>Ibadan</h6>
First Floor, H25 Heritage Mall,
Opposite Central Bank of Nigeria,
Dugbe, Ibadan.
<br />
<strong>0906 281 9994</strong>
 <br />
<br />
Christianah Oyinade Ajoke House, beside First Bank, Arisekola Central Mosque, Opposite Jaiz bank, Idi Ape, Iwo road, Ibadan.
<br />
<strong>0906 281 9995</strong>
<br />
<br />
Haier Thermocool Building, opposite SAO filling station, Challenge, Ibadan, Oyo State.

<strong>0906 281 9994</strong>

<a href="">Locate on the map</a></div>
    <div className={style.flex}><h6 className={style.h4first}>Abeokuta</h6>
First floor, OPIC Tower building, Okeilewo, Abeokuta.

<strong>0906 281 9996</strong>

<a href="">Locate on the map</a>


<h6 className={style.h4first}>Osogbo</h6>
Opposite Jaiz bank, Ogo-Oluwa, Osogbo

<strong>0906 281 9997</strong>

<a href="">Locate on the map</a></div>

    </div>
    <div className={style.end}>
  <h4 className={style.final}>Copyright © 2025 | SQI ICT Consultants. All Rights Reserved.</h4>
</div>
    </>
  )
}

export default Footer
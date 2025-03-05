import React from 'react'
import style from "./Navbar.module.css"
import Image from "./sqiICON.jpg"


const Navbar = () => {
  return (
    <div>
            <div className={style.mother}>
            <img className={style.icon} src={Image} />
            <ul className={style.unordered}>
              <li className={style.list}>About 
               {/* <i className={style.font} ></i> */}
               
                </li>
               <li className={style.list}>Program 
               {/* <i style=" font-size: 6px; padding-left: 5px; padding-top: 5px;" class="fa fa-chevron-down" aria-hidden="true"></i> */}
               </li>
               <li className={style.list}>Admission
                {/* <i style=" font-size: 6px; padding-left: 5px; padding-top: 5px;" class="fa fa-chevron-down" aria-hidden="true"></i> */}
               </li>
               <li className={style.list}>E-portal 
               {/* <i style=" font-size: 6px; padding-left: 5px; padding-top: 5px;" class="fa fa-chevron-down" aria-hidden="true"></i> */}
               </li>
               <li className={style.list}>SQI scholarship </li>
               <li className={style.list}>news </li>
            </ul>
            </div>
        </div>

     

  )
}

export default Navbar
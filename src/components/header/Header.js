'use client'
import React, { useState } from 'react'
import './Header.scss';
import search from '../../assets/search.png';
import bell from '../../assets/bell.png';
import VideoLesson from '../../assets/VideoLesson.png';
import checkboxs from '../../assets/checkboxs.png';
import office from '../../assets/office.png';
import unitedstates from '../../assets/unitedstates.png';
import placeholder from '../../assets/placeholder.png';
import arrow from '../../assets/arrow.png';
import hamburger from '../../assets/hamburger.png';

import Image from 'next/image';

const Header = () => {

    const [display, setDisplay]= useState(false)

  return (
    <div className='heading'>

        <div className='inp'>
            <Image src={search} alt="search" width={25} height={25} />
            <input className='inps' type="text" name="" placeholder='Search' id="" />
        </div>

        <Image className='ham' onClick={()=> setDisplay(!display)} src={hamburger} width={40} height={40} />

       <div className={display ? 'responsivess responsive' : 'responsive'}>

        <div>
            <p className='other'>OTHER MENUS</p>
        </div>

        <div className='d'>
            <span className='d2'>
            <Image className='bell1' src={bell} width={28} height={28} />
            <p className='b1'>12</p>
            </span>

            <span className='d2'>
            <Image className='bell2' src={VideoLesson} width={28} height={28} />
            <p className='b2'>5</p>
            </span>

            <span className='d2'>
            <Image className='bell2' src={checkboxs} width={28} height={28} />
            <p className='b2'>2</p>
            </span>

            <span className='d2'>
            <Image className='bell2' src={office} width={28} height={28} />
            <p className='b3'>!</p>
            </span>
            
        </div>

        <div className='selects'>
        <Image className='united' src={unitedstates} width={28} height={28} />
            <select name="" id="">
                <option value="0">ENGLISH
                </option>
            </select>
        </div>

        <div className='admin'>
        <Image className='united' src={placeholder} width={45} height={45} />
        <div className='InstructorMain'>
            <p className='Instructor'>Instructor Day</p>
            <p className='Instructor2'>Super Admin</p>
        </div>
        <Image className='uniteds' src={arrow} width={10} height={8} />
        </div>

       
        </div>

      
    </div>
  )
}

export default Header
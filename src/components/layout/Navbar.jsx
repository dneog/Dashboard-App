'use client'
import React, { useReducer, useRef, useState } from 'react';
import Link from 'next/link';
import './Layout.scss';
import { usePathname } from 'next/navigation';
import hamburger from '../../assets/hamburger.png';
import MaskGroup from '../../assets/MaskGroup.png';
import Image from 'next/image';

const Navbar = ({navItems}) => {
  
  
  const pathName= usePathname()
  const [show, setShow]= useState(false)
 

  return (
    <div className={show ? 'navsMobile' : 'navs'}>
      <div className='navHeader'>
        <p className={show ? 'mainText2' : 'mainText'}>weframetech</p>
      <Image
    src={hamburger}
    className='hamShow'
    width={44}
    height={43}
    onClick={()=> setShow(!show)}
    style={{cursor: 'pointer'}}
    alt="hamburger"
  />
      </div>
      {!show && <p className='menuText'>MAIN MENU</p>}
      
     {navItems.map(item => {
    return <Link key={item.label} href={item.href} className={!show ? (pathName === item.href ? 'active items': 'items') : (pathName === item.href ? 'active2 items2': 'items2')}>

     <div className='n1'>
     <i className='itemIcon'>{item.icon}</i>
    <a className={show ? 'labelShow2' : 'labelShow'}>{item.label}</a>
     </div>
    
    <div className={show ? 'labelShow2' : 'n2'}>
      {item.notification && <p className='notification'>{item.notification}</p> }
    
     <i className='itemIcon'>{item.icon2}</i>
    </div>
        
     {!show && item.badge && 
     <div className='badgeCover'>
      <p className='badge'>{item.badge}</p>
     </div>
    }   
   
    </Link>
     
  })}

  {!show &&  <div className='banner'>
    <p className='k1'>Increase your work with kanban</p>
    <Image src={MaskGroup} className='k22' width={259} height={203}/>
  </div> }
 
    </div>
  )
}

export default Navbar
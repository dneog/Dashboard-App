import React from 'react';
import Image from 'next/image';
import dash from '../../assets/dashboard.png';
import comment from '../../assets/comment.png';
import ic_chevron from '../../assets/ic_chevron.png';
import ic_chevron2 from '../../assets/ic_chevron2.png';
import email from '../../assets/email.png';
import thumbnail from '../../assets/thumbnail.png';
import contact from '../../assets/contact.png';
import calendar from '../../assets/calendar.png';
import invoice from '../../assets/invoice.png';
import online from '../../assets/online.png';
import invoices from '../../assets/invoices.png';
import setting from '../../assets/setting.png';

import Navbar from './Navbar';


const navItems= [
    {href: '#', icon: <Image
    src={dash}
    width={29.62}
    height={28}
    alt="dashboard"
  />, label:<span style={{color: '#464366'}}>Dashboard</span>},

    {href: '#', icon:<Image
    src={email}
    width={29.62}
    height={28}
    alt="email"
  />, icon2:<Image
  src={ic_chevron}
  width={24}
  height={24}
  alt="email"
/>, notification: 17, label: <span style={{color: '#464366'}}>Email</span>},

{href: '#', icon: <Image
src={comment}
width={29.62}
height={28}
alt="Chat"
/>, label: 'Chat'},

{href: '/', icon: <Image
src={thumbnail}
width={29.62}
height={28}
alt="Kanban"
/>,icon2:<Image
  src={ic_chevron2}
  width={24}
  height={24}
  alt="Kanban"
/>, label: 'Kanban'},

{href: '#', icon: <Image
src={contact}
width={29.62}
height={28}
alt="Contact"
/>, badge:'NEW', label: 'Contact'},


{href: '#', icon: <Image
src={calendar}
width={29.62}
height={28}
alt="calendar"
/>,  label: 'calendar'},

{href: '#', icon: <Image
src={invoice}
width={29.62}
height={28}
alt="invoice"
/>,icon2:<Image
  src={ic_chevron2}
  width={24}
  height={24}
  alt="courses"
/>, label: 'Courses'},

{href: '#', icon: <Image
src={online}
width={29.62}
height={28}
alt="shop"
/>,  label: 'Shop'},

{href: '#', icon: <Image
src={invoices}
width={29.62}
height={28}
alt="invoices"
/>,icon2:<Image
  src={ic_chevron2}
  width={24}
  height={24}
  alt="courses"
/>, label: 'Invoices'},

{href: '#', icon: <Image
src={setting}
width={29.62}
height={28}
alt="setting"
/>,  label: 'Setting'},

   
]

const NavLayout = ({children}) => {
   
  return (

    <div className='main1'>

      <div className='main3'>
      <Navbar navItems={navItems} />
      </div>
   
    <div className='main2'>
    {children}
    </div>
    </div>

  )
}

export default NavLayout
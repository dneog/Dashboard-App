import React from 'react';
import './Banner.scss';
import btnback from '../../assets/btnback.png';
import logo from '../../assets/logo.png';
import vertIcon from '../../assets/vertIcon.png';
import circle from '../../assets/round.png';
import red from '../../assets/red.png';
import addfriend from '../../assets/addfriend.png';
import chats from '../../assets/chats.png';

import Image from 'next/image';

const Banner = () => {
  return (
    <div className='bannerMain'>

        <div className='school'>

            <div className='s1'>
                <div className='s11'>
                <Image src={btnback} width={35} height={35}/>
                <p className='s1c'>School November Tasks</p>

                </div>
            
            <p className='s2c'>Created by Instructor Day on November 31, 2022</p>
            </div>

            <div className='s2'>

                <div className='s21'>
                    <p className='s211'>Centered Martial Arts</p>
                    <p className='s222'>Sunnyvale, Ca</p>
                </div>
                <div className='l1'>
                <Image src={logo} className='l11'  width={60} height={60} alt='logo'/>
                <Image src={vertIcon} className=''  width={22} height={20} alt='logo1' style={{cursor: 'pointer'}}/>
                </div>             
            </div>
        </div>


        <div className='people'>

            <div className='people1'>
            <div className='p1'>
        <p className='p7'>5+</p>
        <Image src={circle} className='p2'  width={36} height={36} alt='logo'/>
        <Image src={circle} className='p3'  width={36} height={36} alt='logo'/>
        <Image src={circle} className='p4' width={36} height={36} alt='logo'/>
        <Image src={circle} className='p5'  width={36} height={36} alt='logo'/>
        <Image src={red} className='p6'  width={36} height={36} alt='logo'/>
        <button className='but1'><Image src={addfriend} className='p' alt='logos'/> Invite People</button>
        </div>

        
            
        
            <div className='people2'>
            <button className='but2'>Private</button>
            <button className='but3'>Edit</button>
            <button className='but4'><Image src={chats} className='p' alt='chats'/>45 Comments</button>
            </div>

            </div>

           

            <div className='people3'>
            <p className='pe1'>Total Progress 60%</p>

            <div className='pe2'>
                <p className='pe3'>.</p>
            </div>
            </div>

       

        </div>

       
    </div>
  )
}

export default Banner
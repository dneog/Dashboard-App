'use client'
import React from 'react';
import './TaskCard.scss';
import vertIconV from '../../assets/vertIconV.png';
import circle from '../../assets/circle.png';
import clock  from '../../assets/clock.png';
import Image from 'next/image';

const ProgressCard = ({item}) => {
    

    const newArr= Array.from(new Array(Math.floor(item.people)))
  return (
    <div className='taskCard'>
        <div draggable className='drag'>
        <div className='m1'>
            <div className='m11'>
            {item.point}
            <p className='imp'>{item.message}</p>
            </div>
        <Image src={vertIconV} width={22} height={22}  alt='i1'/>
        </div>

        
            <p className='create'>{item.task}</p>
        

        <div className='progress'>
               
                {item.progress}
               
        </div>

        <div className='arr'>
            <div>
            {newArr.map((rate)=> (
            <Image src={circle} className='circleP'  width={34} height={34} alt='logo'/>
        ))}
            </div>
        

        <div className='arr1'>
        <Image src={clock} className='circles'  width={16} height={16} alt='logo'/>
            <p className='arr2'>Due in 4 days</p>
        </div>
        </div>
       
        


        </div>
    </div>
  )
}

export default ProgressCard
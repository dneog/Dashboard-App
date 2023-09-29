import React from 'react';
import './Card.scss';
import btnAdd from '../../assets/btnAdd.png';
import Image from 'next/image';
import TaskCard from '../task/TaskCard';
import plus from '../../assets/plus.png';
import ProgressCard from '../task/ProgressCard';
import Revise from '../task/Revise';

const Card = () => {

  const todo= [
    {
      message: <span style={{color: '#FFAB2D'}}>important</span>,

      point: <span style={{background:'#FFAB2D', height: '10px', color: '#e2d92700', borderRadius: '50%', marginRight: '10px', width: '9px', fontSize: '12px'}}>O</span>,
      progress: <p style={{width: '30%',color: '#00000000', background: '#FFAB2D', height: '8px', borderRadius: '10px'}}>.</p>,
      task: 'Create sign up sheet for holiday student/parent conferences.',

      people: 4,
    },
    {
      message: <span style={{color: '#E328AF'}}>important</span>,

      point: <span style={{background:'#E328AF', height: '10px', color: '#e2d92700', borderRadius: '50%', marginRight: '10px', width: '9px', fontSize: '12px'}}>O</span>,
      progress: <p style={{width: '45%',color: '#00000000', background: '#E328AF', height: '8px', borderRadius: '10px'}}>.</p>,
      task: 'Plan holiday demonstration program. Create outline.',

      people: 3,
    },
    {
      message: <span style={{color: '#38E25D'}}>important</span>,

      point: <span style={{background:'#38E25D', height: '10px', color: '#e2d92700', borderRadius: '50%', marginRight: '10px', width: '9px', fontSize: '12px'}}>O</span>,
      progress: <p style={{width: '20%',color: '#00000000', background: '#38E25D', height: '8px', borderRadius: '10px'}}>.</p>,
      task: 'Determine how many boards need to be ordered for testing and demo.',

      people: 2,
    },
    
  ]

  const progress= [
    {
      message: <span style={{color: '#5ECFFF'}}>Video</span>,

      point: <span style={{background:'#5ECFFF', height: '10px', color: '#e2d92700', borderRadius: '50%', marginRight: '10px', width: '9px', fontSize: '12px'}}>O</span>,
      progress: <p style={{width: '80%',color: '#00000000', background: '#5ECFFF', height: '8px', borderRadius: '10px'}}>.</p>,
      task: 'Create sparring tutorial video for the weekly class.',

      people: 3,
    },
    {
      message: <span style={{color: '#FF4A55'}}>BUGS FIXING</span>,

      point: <span style={{background:'#FF4A55', height: '10px', color: '#e2d92700', borderRadius: '50%', marginRight: '10px', width: '9px', fontSize: '12px'}}>O</span>,
      progress: <p style={{width: '90%',color: '#00000000', background: '#FF4A55', height: '8px', borderRadius: '10px'}}>.</p>,
      task: 'Payment gateway needs reauthorization.',

      people: 4,
    },
  ]


  const done= [
    {
      message: <span style={{color: '#FF4A55'}}>BUGS FIXING</span>,

      point: <span style={{background:'#FF4A55', height: '10px', color: '#e2d92700', borderRadius: '50%', marginRight: '10px', width: '9px', fontSize: '12px'}}>O</span>,
      progress: <p style={{width: '100%',color: '#00000000', background: '#FF4A55', height: '8px', borderRadius: '10px'}}>.</p>,
      task: 'Action Button needed for Google Maps visits.',

      people: 4,
    },
    {
      message: <span style={{color: '#38E25D'}}>Database</span>,

      point: <span style={{background:'#38E25D', height: '10px', color: '#e2d92700', borderRadius: '50%', marginRight: '10px', width: '9px', fontSize: '12px'}}>O</span>,
      progress: <p style={{width: '100%',color: '#00000000', background: '#38E25D', height: '8px', borderRadius: '10px'}}>.</p>,
      task: 'Update new instructor photos.',

      people: 4,
    },
    {
      message: <span style={{color: '#E328AF'}}>Instructor Meeting</span>,

      point: <span style={{background:'#E328AF', height: '10px', color: '#e2d92700', borderRadius: '50%', marginRight: '10px', width: '9px', fontSize: '12px'}}>O</span>,
      progress: <p style={{width: '100%',color: '#00000000', background: '#E328AF', height: '8px', borderRadius: '10px'}}>.</p>,
      task: 'Review/correct yellow belt techniques.',

      people: 4,
    },
  ]
  return (
    <div className='mainCards'>

        <div className='card1' >
            <div className='todo'>
                <p className='t1'>To-Do List (24)</p>
                <button className='add1'><Image  src={plus} width={16} height={16}/></button>
            </div>
            <div className='todoList'>
            {todo.map((item)=> (
                 <TaskCard key={item.people} item={item} />
            ))}
            </div>  
        </div>

        <div className='card1' >
            <div className='todo'>
                <p className='t1'>In Progress (2)</p>
                <button className='add1p' disabled><Image className='pluss'  src={plus} width={16} height={16}/></button>
            </div>
            <div className='todoList'>
            {progress.map((item)=> (
                 <ProgressCard key={item.people} item={item} />
            ))}
            </div>  
        </div>


        <div className='card1' >
            <div className='todo'>
                <p className='t1'>Done (3)</p>
                <button className='add1p' disabled><Image className='pluss'  src={plus} width={16} height={16}/></button>
            </div>
            <div className='todoList'>
            {done.map((item)=> (
                 <ProgressCard key={item.people} item={item} />
            ))}
            </div>  
        </div>

        <div className='card1' >
            <div className='todo'>
                <p className='t1'>Revise (0)</p>
                <button className='add1p' disabled><Image className='pluss'  src={plus} width={16} height={16}/></button>
            </div>
            <div className='todoList'>
           
                 <Revise />
           
            </div>  
        </div>

        



    </div>
  )
}

export default Card
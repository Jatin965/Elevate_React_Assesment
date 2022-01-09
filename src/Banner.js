import React from 'react'
import banner from './bn.jpg'
import arw from './ar.png'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='body'>
        <div className='content'>
          <h1>Expense management software to - Control <span>Accounting</span></h1>
          <p>Let your employees claim easily by clicking the receipt for review.</p>
          <button>Get Started</button>
          <img src={arw} alt='arrow' />
          <div className='line1'>
            <div className='line line-a' />
            <div className='line line-b' />
            <div className='line' />
          </div>
          <div className='line2'>
            <div className='line' />
            <div className='line line-b' />
            <div className='line line-a' />
          </div>
        </div>
        <img src={banner} alt='Banner' />
      </div>
      
    </div>
  )
}

export default Banner

import React from 'react'
import img1 from './1.webp'
import img2 from './2.svg'
import img3 from './3.webp'
import img4 from './4.webp'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-images'>
      <img src={img1} alt='1' />
      <img src={img2} alt='2' />
      <img src={img3} alt='3' />
      <img src={img4} alt='4' />
      </div>

      <hr />
    </div>
  )
}

export default Footer

import React from 'react'
import logo from '../components/assets/logo.png'
import eyebutton from '../components/assets/eyebutton.png'

const Navbar = () => {
  return (
    <div className='flex flex-wrap justify-between p-4 px-8 text-white items-center'>
      <img src={logo} className='h-10 cursor-pointer' alt="logo" />
      <ul className='flex flex-col md:flex-row justify-center space-x-3 items-center uppercase font-semibold text-sm md:text-[1.1rem]'>
        <div className="flex items-center space-x-3">
          <li className='p-1'>Sign in</li>
          <li className='p-1'>Legal</li>
          <li className='p-1'>Licences</li>
        </div>
        <div className="flex items-center space-x-3">
          <li className='p-1'>Security</li>
          <li className='p-1'>Careers</li>
          <li className='p-1'>Press</li>
          <li className='p-1'>Support</li>
        </div>
        <div className="flex items-center space-x-3">
          <li className='p-1'>Status</li>
          <li className='p-1'>Codeblog</li>
        </div>
      </ul>
      <img className='h-10 cursor-pointer' src={eyebutton} alt="eyebutton" />
    </div>
  )
}

export default Navbar
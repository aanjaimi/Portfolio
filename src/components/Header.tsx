import React from 'react'
import Logo from "../../public/logo.svg"
import Image from 'next/image';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href="#">
            <Image width={111} height={48} src={Logo} alt=""/>
          </a>
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  )
}

export default Header;
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import {Link} from 'react-router-dom'

function Footer() {
     return(
      <>
      <div className='flex justify-between bg-black text-white '>

        <div className='m-6'>
          <span className='uppercase text-gray-500'>resources</span>

          <ul className='text-gray-700 mt-4'>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

        <div className='m-6'>
          <span className='uppercase text-gray-500'>features</span>

          <ul className='text-gray-700 mt-4 capitalize'>
            <li><Link>blog</Link></li>
            <li><Link>faqs</Link></li>
            <li><Link>what's more</Link></li>
          </ul>
        </div>

        <div className='m-6'>
          <span className='uppercase text-gray-500'>works</span>

          <ul className='text-gray-700 mt-4 capitalize'>
            <li><Link>project1</Link></li>
            <li><Link>project2</Link></li>
            <li><Link>project3</Link></li>
          </ul>
        </div>

        <div className='m-6'>
          <span className='uppercase text-gray-500'>legal</span>

          <ul className='text-gray-700 mt-4 capitalize'>
            <li><Link>privacy policy</Link></li>
            <li><Link>terms &amp; conditions</Link></li>
            <li><Link>license</Link></li>
          </ul>
        </div>

        <hr className='text-gray-800' />

      <div className='flex justify-between p-8 items-center'> 
        <p className='text-gray-900 m-4'> ©2026 nishantchaudhary</p>

        <div className='flex gap-4'>
          <FaInstagram className='cursor-pointer p-1 rounded-lg text-gray-800 h-8 w-8'>ig</FaInstagram>
          <FaFacebook className='text-gray-800 cursor-pointer p-1 rounded-lg h-8 w-8'>fb</FaFacebook>
          <FaGithub className='text-gray-800 cursor-pointer p-1 rounded-lg  h-8 w-8'>git</FaGithub>
          <FaLinkedin className='text-gray-800 cursor-pointer p-1 rounded-lg  h-8 w-8'>lnk</FaLinkedin>
        </div>

      </div>  


      </div>
    
      </>
     )
}

export default Footer
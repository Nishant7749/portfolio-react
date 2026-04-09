import { NavLink } from "react-router-dom"

function Header() {
  return(
  <>
  <div className='bg-black text-white w-full h-20 flex justify-between items-center'>
    <img className='pl-8 w-20 h-10 drop-shadow-gray-300 drop-shadow-sm' src="https://plus.unsplash.com/premium_photo-1675876811802-fed0becd1e40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8biUyMGxvZ298ZW58MHx8MHx8fDA%3D" alt="logo" />

  <nav>
    <ul className='flex justify-center gap-4 text-center'>
      <li><NavLink to='/' className={({isActive}) => isActive ? 'underline' : 'none'}>Home</NavLink></li>

     <li><NavLink to='/about' className={({isActive}) => isActive ? 'underline' : 'none'}>About</NavLink></li>

      <li><NavLink to='/projects' className={({isActive}) => isActive ? 'underline' : 'none'}>Projects</NavLink></li>

      <li><NavLink to='/contact' className={({isActive}) => isActive ? 'underline' : 'none'}>Contact</NavLink></li>
    </ul>
  </nav>  

  <div className='pr-18'>
    <button className='shadow-gray-200 shadow-sm p-2 m-4 rounded-sm transition-colors delay-75 hover:bg-gray-950 cursor-pointer active:text-amber-100'><NavLink to='/contact'>Get In Touch</NavLink></button>
    <button className='shadow-gray-200 shadow-sm p-2 uppercase rounded-lg transition-colors delay-75 hover:bg-gray-950 cursor-pointer active:text-amber-100'><NavLink to='/login'>log in</NavLink></button>
  </div>

  </div>
  
  </>
  )
}

export default Header
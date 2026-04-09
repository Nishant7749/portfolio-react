import TypeWriter from '../myEffects/TypeWriter'
import ToggleTheme from '../myEffects/ToggleTheme'

function Home() {
  return(
    <>
    <div className='dark:bg-black dark:text-white h-100'>

      <h1 className='text-7xl uppercase m-8 text-center'>Nishant <span className='italic text-gray-700 capitalize'>Chaudhary</span></h1>

      <p className='p-8 text-xl w-300 text-center'><TypeWriter/></p>        

      <button className='dark:bg-white dark:text-black border m-8 bg-black text-white rounded-xl capitalize p-4 ml-18 hover:shadow-gray-400 hover:shadow-md cursor-pointer transition-shadow delay-200'>know more</button>
      <ToggleTheme/>
    </div>
    
    </>
  )
}

export default Home
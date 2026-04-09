

function Projects() {             
  return(
    <>                                       

    <div className='h-100'>
      <h1 className='text-center text-5xl m-5' >My Works</h1>

      <ul className='grid grid-cols-2 gap-4 m-4 p-4 justify-between'>
        <li className='bg-gray-900 text-white rounded-xl p-4 text-center  shadow-md shadow-black hover:shadow-lg'>
          <h2 className='uppercase underline'>Project1</h2>
          <p className='m-4'>about project</p>
          <a href="#" className='bg-gray-800 rounded-lg p-2'>View Here</a>
        </li>

        <li className='bg-gray-900 text-center text-white rounded-xl p-4  shadow-md shadow-black hover:shadow-lg'>
          <h2 className='uppercase underline'>Project2</h2>
          <p className='m-4'>about project</p>
          <a href="#" className='bg-gray-800 rounded-lg p-2'>View Here</a>
        </li>

        <li className='bg-gray-900 text-center text-white rounded-xl p-4  shadow-md shadow-black hover:shadow-lg'>
          <h2 className='uppercase underline'>Project3</h2>
          <p className='m-4'>about project</p>
          <a href="#" className='bg-gray-800 rounded-lg p-2'>View Here</a>
        </li>

        <li className='bg-gray-900 text-center text-white rounded-xl p-4 shadow-md shadow-black hover:shadow-lg'>
          <h2 className='uppercase underline'>Project4</h2>
          <p className='m-4'>about project</p>
          <a href="#" className='bg-gray-800 rounded-lg p-2'>View Here</a>
        </li>
      </ul>
    </div>
    
    </>
  )
}

export default Projects
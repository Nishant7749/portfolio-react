

function Contact() {             
  return(
    <>

    <div className='h-150 flex flex-col items-center'>
      <h1 className='text-5xl text-center m-5'>Contact Us</h1>

<div>
      <form className='border rounded-xl border-gray-700 m-10 bg-black text-white flex flex-col p-20'>
        <input type="text" placeholder='Name' className='border rounded-xl text-center p-1 m-2' required/>

        <input type="text" placeholder='Email' className='border rounded-xl text-center p-1 m-2'required/>

        <input type="text" placeholder='Place' className='border rounded-xl text-center p-1 m-2' required/>

        <textarea placeholder='Enter Your Message' className='border rounded-sm text-center mt-4 w-60 p-1 h-20 bg-gray-950' required></textarea>

        <button type='submit' className='border bg-white text-black border-black rounded-xl m-2 p-2'>Send</button>
      </form>
      </div>
    </div>
    
    </>
  )
}

export default Contact
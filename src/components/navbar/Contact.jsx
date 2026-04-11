import useFormValidation from "../myEffects/FormValidation"

function Contact() {
  const { showPassword, handleSubmit, togglePassword, email, password, error, setEmail, setPassword } = useFormValidation()

  return (
    <>

      <div className='h-150 flex flex-col items-center'>
        <h1 className='text-5xl text-center m-5'>Contact Us</h1>

        <div>
          <form onSubmit={handleSubmit} className='border rounded-xl border-gray-700 m-10 bg-black text-white mb-10 flex flex-col p-20'>
            <div>
              <input type="text" placeholder='Name' className='w-60 border rounded-xl text-center p-1 m-2' required />
            </div>

            <div>
              <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-60 border rounded-xl text-center p-1 m-2' />
              {error.email && (<p className="text-sm text-red-600">{error.email}</p>)}
            </div>

            <div>
              <input type={showPassword ? "text" : "password"} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-50 border rounded-l-xl text-center p-1 my-2' />
              <button className="cursor-pointer border rounded-r-xl p-1 hover:bg-white hover:text-black hover:border-white" onClick={togglePassword}>{showPassword ? "hide" : "show"}</button>
              {error.password && (<p className="text-sm text-red-600">{error.password}</p>)}
            </div>

            <div>
              <textarea placeholder='Enter Your Message' className='border rounded-sm text-center mt-4 w-60 p-1 h-20 bg-gray-950' required></textarea>
            </div>

            <div className="flex justify-center items-center">
              <button type='submit' className='w-20 border bg-white text-black border-black rounded-xl m-2 p-2 cursor-pointer'>Send</button>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default Contact
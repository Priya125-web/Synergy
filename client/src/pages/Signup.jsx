import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';




export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]: e.target.value.trim()})
  }
 const handleSubmit = async(e)=>{
  e.preventDefault()
  if (!formData.username || !formData.email || !formData.password){
    
      return setErrorMessage('Please fill out all fields.');
    
  }
  try {
    setLoading(true);
    setErrorMessage(null);
    const res = await fetch('/api/auth/signup',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json()
    if (data.success === false) {
      return setErrorMessage(data.message);
    }
    setLoading(false);
    if(res.ok) {
      navigate('/signin');
    }
  } catch (error) {
    setErrorMessage(error.message);
    setLoading(false);
  }
 }
    
  
  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover'>
    <div className='bg-slate-800 border border-slate-400 w-80 lg:w-[25%] rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-80 relative'>
    <h1 className='font-bold text-center text-4xl mb-3'>Sign Up</h1>
    <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-500"/>
          <div className='flex-1'>
          <form className='flex flex-col gap-4'onSubmit={handleSubmit}>
            <div>
              <Label value='Your Username' className='text-white' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your Email' className='text-white'/>
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your Password' className='text-white' />
              <TextInput
                type='password'
                placeholder='********'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
             >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
         
          </form>
          <div >
          <span className='flex justify-center items-center mt-4'>Existing User?
          <Link to='/signin' className='text-blue-500 ml-1'>
            Sign In
          </Link></span>
        </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
   </div>
  );
}
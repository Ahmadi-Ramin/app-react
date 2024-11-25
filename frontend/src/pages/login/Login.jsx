import React, { useState } from 'react';
import Paris from '../../../public/assets/paris.jpg'
import { toast } from 'react-hot-toast';
import Button from '../../ui/Button';
import Input from '../../ui/Input';


const Login = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple validation for demonstration
    if (!email || !password) {
      toast.error('Please enter valid email and password');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate a sign-in process (replace this with actual sign-in logic)
      const response = await fakeSignIn({ email, password });

      if (response.success) {
        toast.success('Login successful!');
        history.push('/'); // Navigate to the homepage (or any other page)
      } else {
        toast.error('Email or password is incorrect');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred during login');
    }

    setIsLoading(false);
  };

  // Fake sign-in function to simulate authentication (replace with actual logic)
  const fakeSignIn = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.email === 'test@test.com' && data.password === 'password') {
          resolve({ success: true });
        } else {
          reject({ success: false });
        }
      }, 1000); // Simulate a delay
    });
  };

  return (
    <div className='relative h-screen w-full'>
      <div className="relative h-full w-full">
        <img
          className="brightness-50 h-full w-full object-cover"
          src={Paris} // Replace with your image path
          alt="Login's image"
        />
        <div className="h-[350px] w-[350px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg">
          <h2 className="text-center p-4 font-semibold text-slate-800 text-2xl border-b border-slate-500">Log into your account</h2>
          <form onSubmit={handleSubmit} className='mt-8 flex flex-col items-center w-full gap-8' >
            <Input
              type="email"
              placeholder="John@gmail.com"
              className="w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="*******"
              className="w-full mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="w-3/4 mx-auto mt-12 cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 transition-all hover:bg-blue-600"
              disabled={isLoading}
              label={"Submit"}
              />
              {/* {isLoading ? 'Logging in...' : 'Submit'} */}


            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;

import React, { useState } from 'react';
import Paris from '../../../public/assets/paris.jpg'
import { toast } from 'react-hot-toast';
import './Login.css'; // Import the CSS file

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
    <div className="login-container">
      <img
        className="login-image"
        src={Paris} // Replace with your image path
        alt="Login's image"
      />
      <div className="form-container">
        <h2 className="form-header">Log into your account</h2>
        <form onSubmit={handleSubmit} className='login-form' >
          <input
            type="email"
            placeholder="John@gmail.com"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="*******"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

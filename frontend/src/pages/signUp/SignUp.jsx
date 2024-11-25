import './SignUp.css';
import React from 'react';

import Dubai from '../../../public/assets/Dubai.jpg'; // Ensure proper path
import Input from '../../ui/Input'; // Replace with your own Input component
import Button from '../../ui/Button'; // Replace with your own Button component
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import { schema } from './schema'
import { toast } from 'react-toastify'; // React Toastify for notifications

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (Object.keys(errors)?.length > 0) {
      toast.error('Enter valid data');
      return;
    }

    try {
      await AXIOS_API.post('/register', data);

      toast.success('Success! Redirecting to login');

      setTimeout(() => {
        navigate('/login');
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={Dubai} alt="Signup Background" />
      </div>
      <div className="signup-form-container">
        <h2 className="signup-title">Create an account</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <Input
            className="signup-input"
            type="text"
            placeholder="John123"
            register={register('username')}
          />
          <Input
            className="signup-input"
            type="email"
            placeholder="johndoe@gmail.com"
            register={register('email')}
          />
          <Input
            className="signup-input"
            type="password"
            placeholder="********"
            register={register('password')}
          />
          <Button className="signup-button" label="Submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;

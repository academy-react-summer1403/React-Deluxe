// import React from 'react';
// import LoginForm from './LoginForm';
import { LoginForm } from './loginForm';
import { SideImage } from './SideImage';

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-50 flex items-center justify-center">
        <SideImage />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}

export { LoginPage } ;

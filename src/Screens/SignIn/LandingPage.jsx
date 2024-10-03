import React from 'react';
import LeftPanel from './LeftPanel';
import LoginForm from './LoginForm';


const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(inputValue);
  };


const LandingPage = () => {
  return (
    <div className="flex w-1024 h-full text-right">
      {/* Left Panel */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100 p-10 text-right">
        <LeftPanel />
      </div>

      {/* Right Panel (Login Form) */}
      <div className="w-1/2 flex items-center justify-center p-10 text-right">
        <LoginForm />
      </div>
    </div>
  );
};

export default LandingPage;

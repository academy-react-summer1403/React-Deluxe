
import React from 'react';
import LeftPanel from '../Screens/SignIn/LeftPanel.jsx';
import LoginForm from '../Screens/SignIn/LoginForm.jsx';

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="w-1/2 bg-gray-100 p-10 flex items-center">
        <LeftPanel />
      </div>

      {/* Right Panel (Login Form) */}
      <div className="w-1/2 p-10 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default App;


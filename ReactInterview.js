/**
 * 1. Create a button getOTP , On clicking the button, it should be disabled till 30 sec. Enable after 30 second. 
 * 
 * 
 import { useState } from 'react';

function GetOTP() {
  const [disabled, setDisabled] = useState(false);

  function handleClick() {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 30000);
  }

  return (
    <button onClick={handleClick} disabled={disabled}>
      {disabled ? 'Please wait 30 seconds...' : 'Get OTP'}
    </button>
  );
}








 */
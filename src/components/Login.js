import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [myFlag, setFlag] = useState(0);
  const onChangeUsername = e => {
    setUsername(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const onSubmitForm = () => {
    setFlag(1);
  };
  return (
    <div>
      <label>Username:</label>
      <input
        type='text'
        name='username'
        onChange={onChangeUsername}
        value={username}
        autoComplete='off'
      />
      <label>Password:</label>
      <input
        type='password'
        name='password'
        onChange={onChangePassword}
        value={password}
      />

      <button type='submit' onClick={onSubmitForm}>
        Login
      </button>

      {myFlag === 1 ? username : password}
    </div>
  );
}
export default Login;

import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [username, setUsername] = useState('');

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: username
    };

    console.log(newUser);

    axios.post('http://localhost:5000/users/add', newUser)
      .then(res => console.log(res.data));

    setUsername('');
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;

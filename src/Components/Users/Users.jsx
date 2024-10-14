import React, { useState, useEffect } from 'react';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = () => {
      const storedUsers = JSON.parse(localStorage.getItem('userDetails')) || [];
      setUsers(storedUsers);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  const handleRemove = (id) => {
    const confirm = window.confirm('Are you sure you want to delete this user?');
    if (!confirm) return;

    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem('userDetails', JSON.stringify(updatedUsers));
  };

  return (
    <div className='user'>
      <h2 className='text-primary text-center'>List Of the Registered Users</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading && <div>Loading users...</div>}
      <div className="user-details d-grid gap-3">
        {users.length === 0 && !loading ? (
          <div>No users found.</div>
        ) : (
          users.map((people, index) => (
            <div className="user-info rounded-2 bg-white p-3 shadow" key={people.id}>
              <div className='fs-6 mb-2'>No.{index + 1}</div>
              <div className='fs-5 mb-1'>Id: {people.id}</div>
              <div className='fs-5 mb-1'>First Name: {people.firstname}</div>
              <div className='fs-5 mb-1'>Last Name: {people.lastname}</div>
              <div className='fs-5 mb-1'>Age: {people.age}</div>
              <div className='fs-5 mb-1'>Mobile: {people.mobileNum}</div>
              <div className='fs-5 mb-1'>Email: {people.email}</div>
              <div className='fs-5 mb-1'>Gender: {people.gender}</div>
              <div className='fs-5 mb-1'>Location: {people.location}</div>
              <div className='fs-5 mb-1'>State: {people.state}</div>
              <button className='btn btn-danger' onClick={() => handleRemove(people.id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Users;

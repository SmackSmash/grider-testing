import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { type User } from './types';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <div className='container mt-4 px-4'>
      <UserForm addUser={addUser} />
      <UserList />
    </div>
  );
};

export default App;

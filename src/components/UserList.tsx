import { type User } from '../types';

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  console.log(users);

  return (
    <div className='mt-4 border-t pt-2'>
      <h1 className='text-poimandres-black mb-2 text-2xl font-bold'>List of Users</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

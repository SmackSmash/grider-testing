import { type User } from '../types';

interface UserListProps {
  users: User[];
}

const UserList = ({ users }: UserListProps) => {
  if (!users.length) {
    return <p className='mt-2'>No users added</p>;
  }

  return (
    <div className='mt-4 border-t pt-2'>
      <h1 className='text-poimandres-black mb-2 text-2xl font-bold'>List of Users</h1>
      <table className='w-full'>
        <thead className='bg-poimandres-lightgrey text-poimandres-blackslate'>
          <tr>
            <th className='border-r-4 border-poimandres-blackslate px-2 py-1 font-bold'>Name</th>
            <th className='px-2 py-1 font-bold'>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email }) => (
            <tr key={id}>
              <td className='p-2'>{name}</td>
              <td className='p-2'>{email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

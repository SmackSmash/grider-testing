const UserList = () => {
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
        <tbody></tbody>
      </table>
    </div>
  );
};

export default UserList;

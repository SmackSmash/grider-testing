const UserForm = () => {
  return (
    <form className='width-full'>
      <h1 className='text-poimandres-black mb-2 text-3xl font-bold'>Add User</h1>
      <label htmlFor='name'>Name</label>
      <input
        className='w-full rounded bg-poimandres-darkslate p-2 outline-none'
        type='text'
        name='name'
        id='name'
      />
      <label htmlFor='email'>Email</label>
      <input
        className='w-full rounded bg-poimandres-darkslate p-2 outline-none'
        type='email'
        name='email'
        id='email'
      />
      <button className='mt-2 w-full rounded bg-poimandres-lightgreen px-4 py-2 font-bold text-poimandres-blackslate hover:bg-blue-700'>
        Add
      </button>
    </form>
  );
};

export default UserForm;

const UserForm = () => {
  return (
    <form className='width-full'>
      <h1 className='text-poimandres-black mb-2 text-2xl font-bold'>Add User</h1>
      <label className='mb-1 mt-2 inline-block' htmlFor='name'>
        Name
      </label>
      <input
        className='w-full rounded bg-poimandres-darkslate p-2 outline-none'
        type='text'
        name='name'
        id='name'
      />
      <label className='mb-1 mt-2 inline-block' htmlFor='email'>
        Email
      </label>
      <input
        className='w-full rounded bg-poimandres-darkslate p-2 outline-none'
        type='email'
        name='email'
        id='email'
      />
      <button className='mt-4 w-full rounded bg-poimandres-midgreen px-4 py-2 font-bold text-poimandres-blackslate hover:relative hover:-top-px hover:bg-poimandres-lightgreen active:top-0'>
        Add
      </button>
    </form>
  );
};

export default UserForm;

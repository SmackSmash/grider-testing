import { useState } from 'react';
import { nanoid } from 'nanoid';
import { type User } from '../types';

interface UserFormProps {
  addUser: (user: User) => void;
}

const UserForm = ({ addUser }: UserFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addUser({ id: nanoid(), name, email });
    setName('');
    setEmail('');
  };

  return (
    <form className='width-full' onSubmit={handleSubmit}>
      <h1 className='text-poimandres-black mb-2 text-2xl font-bold'>Add User</h1>
      <label className='mb-1 mt-2 inline-block' htmlFor='name'>
        Name
      </label>
      <input
        className='w-full rounded bg-poimandres-darkslate p-2 outline-none'
        type='text'
        name='name'
        id='name'
        value={name}
        onChange={handleChangeName}
      />
      <label className='mb-1 mt-2 inline-block' htmlFor='email'>
        Email
      </label>
      <input
        className='w-full rounded bg-poimandres-darkslate p-2 outline-none'
        type='email'
        name='email'
        id='email'
        value={email}
        onChange={handleChangeEmail}
      />
      <button
        className='mt-4 w-full rounded bg-poimandres-midgreen px-4 py-2 font-bold text-poimandres-blackslate hover:relative hover:-top-px hover:bg-poimandres-lightgreen active:top-0'
        type='submit'
      >
        Add
      </button>
    </form>
  );
};

export default UserForm;

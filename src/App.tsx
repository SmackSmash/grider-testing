import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  return (
    <div className='container mt-4 px-4'>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;

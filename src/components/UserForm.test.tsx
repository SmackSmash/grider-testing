import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';
import { type User } from '../types';

describe('UserForm', () => {
  it('has a header', () => {
    render(<UserForm addUser={() => {}} />);
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
  });

  it('shows two inputs and a button', () => {
    render(<UserForm addUser={() => {}} />);
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  it('calls addUser when the form is submitted', async () => {
    const argList: User[] = [];
    const callback = (user: User) => {
      argList.push(user);
    };
    render(<UserForm addUser={callback} />);
    const [name, email] = screen.getAllByRole('textbox');
    await user.type(name, 'Test name');
    await user.type(email, 'test@email.com');
    const button = screen.getByRole('button');
    await user.click(button);
    expect(argList).toHaveLength(1);
  });
});

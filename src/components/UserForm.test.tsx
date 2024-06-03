import { render, screen } from '@testing-library/react';
// import user from '@testing-library/user-event';
import UserForm from './UserForm';

describe('UserForm', () => {
  it('shows two inputs and a button', () => {
    render(<UserForm addUser={() => {}} />);
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getAllByRole('button');
    expect(inputs.length).toBe(2);
    expect(button.length).toBe(1);
  });
});

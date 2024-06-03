import { render, screen } from '@testing-library/react';
// import user from '@testing-library/user-event';
import UserForm from './UserForm';

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
});

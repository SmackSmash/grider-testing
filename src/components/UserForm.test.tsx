import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import user from '@testing-library/user-event';
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

  it('calls addUser with for data when the form is submitted', async () => {
    const mock = vi.fn();
    render(<UserForm addUser={mock} />);
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    await user.type(nameInput, 'Test name');
    await user.type(emailInput, 'test@email.com');
    const button = screen.getByRole('button');
    await user.click(button);
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'Test name', email: 'test@email.com' })
    );
  });
});

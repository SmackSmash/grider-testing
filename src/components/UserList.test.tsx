import { render, screen } from '@testing-library/react';
import UserList from './UserList';

describe('UserList', () => {
  it('should render paragraph when no users in list', () => {
    render(<UserList users={[]} />);
    const paragraph = screen.getByRole('paragraph');
    expect(paragraph).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import UserList from './UserList';

describe('UserList', () => {
  it('renders a paragraph when no users in list', () => {
    render(<UserList users={[]} />);
    const paragraph = screen.getByRole('paragraph');
    expect(paragraph).toBeInTheDocument();
  });

  it('renders one line per user', () => {
    render(
      <UserList
        users={[
          { id: '1', name: 'Dan', email: 'dan@test.com' },
          { id: '1', name: 'Steve', email: 'steve@test.com' }
        ]}
      />
    );
    const danRow = screen.getByRole('row', { name: /dan dan@test\.com/i });
    const steveRow = screen.getByRole('row', { name: /steve steve@test\.com/i });
    expect(danRow).toBeInTheDocument();
    expect(steveRow).toBeInTheDocument();
  });
});

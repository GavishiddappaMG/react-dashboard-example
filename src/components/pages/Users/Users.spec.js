import { render, screen  } from "@testing-library/react";
import renderer, { act } from 'react-test-renderer';
import axios from "axios";
import Users from "./Users";


jest.mock('axios');

const fakeUsers = [{
  "id": 1,
  "name": "Test User 1",
  "username": "testuser1",
}, {
  "id": 2,
  "name": "Test User 2",
  "username": "testuser2",
}];

describe('User Component', () => {
  test('it renders', async() => {
    axios.get.mockResolvedValue({data: fakeUsers});
    await act(() => {
      render(<Users />);
    });
    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  test('it displays a list of users', async() => {
    axios.get.mockResolvedValue({data: fakeUsers});
    
    await act(() => {
      render(<Users />);
    });

    const userList = await screen.findByTestId('user-list');
    expect(userList).toBeInTheDocument();
  });

  test('it displays a row for each user', async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });

    await act(() => {
      render(<Users />);
    });

    const userList = await screen.findAllByTestId('user-item');
    expect(userList).toHaveLength(2);
  });

  // test("it renders a correct snapshot", async () => {
  //   axios.get.mockResolvedValue({ data: fakeUsers });
  //   const tree = renderer.create(<Users />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
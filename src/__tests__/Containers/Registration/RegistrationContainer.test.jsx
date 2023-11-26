import { render, screen } from '@testing-library/react';
import RegistrationContainer from '../../../Containers/Registration/RegistrationContainer'
import userEvent from "@testing-library/user-event";


test('Snapshot test of Registration Container', () => {
  const tree = render(<RegistrationContainer />);
  expect(tree).toMatchSnapshot();
});

test('Snapshot test of Registration Container with errors', async () => {
  const tree = render(<RegistrationContainer />);
  const button = tree.getByText("Register")
  await userEvent.click(button);
  expect(tree).toMatchSnapshot();
});

test('Test that the password and verify password verification gives error on different passwords', async () => {
  const tree = render(<RegistrationContainer />);
  const passwordInput = tree.getByPlaceholderText('Password');
  const verifyPasswordInput = tree.getByPlaceholderText('Verify Password');
  await userEvent.type(passwordInput, "V4L!DPassword");
  await userEvent.type(verifyPasswordInput, "InV4L!DPassword")
  const button = tree.getByText("Register")
  await userEvent.click(button);
  const errorMessage = tree.getAllByText("Verify Password must be match password");
  expect(errorMessage).toBeTruthy();
});

test('Test that the password and verify password verification gives no error on same passwords', async () => {
  const tree = render(<RegistrationContainer />);
  const passwordInput = tree.getByPlaceholderText('Password');
  const verifyPasswordInput = tree.getByPlaceholderText('Verify Password');
  await userEvent.type(passwordInput, "V4L!DPassword");
  await userEvent.type(verifyPasswordInput, "V4L!DPassword")
  const button = tree.getByText("Register")
  await userEvent.click(button);
  const errorMessage = tree.queryByText("Verify Password must be match password")
  expect(errorMessage).toBeNull();
});

test('Test that the name does not allow more than 24 characters', async () => {
  const tree = render(<RegistrationContainer />);
  const firstNameInput = tree.getByPlaceholderText('First Name');
  await userEvent.type(firstNameInput, "SUPERLONGNAMETHATSHOULDCAUSEFAILURE");
  const button = tree.getByText("Register")
  await userEvent.click(button);
  const errorMessage = tree.queryByText("The name must not exceed 24 characters")
  expect(errorMessage).toBeTruthy();
});
  
  

export const validateLoginFn = (value) => {
  const errors = {};
  if (!value.username) {
    errors.username = 'Username is required';
  }
  if (!value.password) {
    errors.password = 'Password is required';
  }
  const errorStatus = Object.keys(errors).length === 0;
  return { errorStatus, errors };
};

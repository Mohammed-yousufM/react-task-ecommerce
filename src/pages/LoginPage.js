import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import CustomToast from '../components/customToast';
import { updateForm, clearForm } from '../redux/slice/login/loginSlice';
import { validateLoginFn } from '../utils/validations/loginform';
import { setTokensFn } from '../utils/browserStorage';

import { checkAuth } from '../services/fakeLogin';

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginTimerId = useRef();
  const login = useSelector((store) => store.login);

  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateForm({ name, value }));
  };

  const validateFn = () => {
    const { errorStatus, errors } = validateLoginFn(login);
    errorStatus || setErrors(errors);
    return errorStatus;
  };

  const mockLoginService = async ({ username, password }) => {
    loginTimerId.current && clearTimeout(loginTimerId.current); //clear if there's already an active timeout
    const fakeProm = await new Promise((resolve, reject) => {
      loginTimerId.current = setTimeout(
        () => checkAuth({ username, password, resolve, reject }),
        2000
      );
    });
    return fakeProm;
  };

  const handleSubmit = async () => {
    const isFormValid = validateFn();
    setIsLoading(true);
    setValidated(true);
    setShowToast(false);
    if (isFormValid) {
      const { username, password } = login;
      try {
        const { data, responscode } = await mockLoginService({
          username,
          password,
        });
        if (responscode === 200) {
          const newTokens = {
            access: data?.tokens?.accessToken,
            refresh: data?.tokens?.refreshToken,
          };
          dispatch(updateForm({ name: 'loginFailed', value: false }));
          setTokensFn({ ...newTokens });
          navigate('/', { replace: true });
        }
      } catch (error) {
        console.log(error);
      }
      setShowToast(true);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    return;
  };

  useEffect(() => {
    return () => {
      //clear effects when component unmounting
      clearForm();
      loginTimerId.current && clearTimeout(loginTimerId.current);
    };
  }, []);

  return (
    <Container>
      <p className="display-4 mt-5 mb-5">Login</p>
      <Form noValidate validated={validated}>
        <Row className="mb-3">
          <CustomInput
            type="text"
            label="Username"
            name="username"
            placeholder="Enter username"
            value={login.username}
            handleChange={handleChange}
            error={errors?.username}
          />
        </Row>

        <Row className="mb-3">
          <CustomInput
            type="password"
            label="Password"
            name="password"
            placeholder="Enter password"
            value={login.password}
            handleChange={handleChange}
            error={errors?.password}
          />
        </Row>

        <CustomButton
          isLoading={isLoading}
          btnTxt="Login"
          handleClick={handleSubmit}
        />
      </Form>
      {showToast ? (
        <CustomToast
          status="danger"
          text="Login failed! Invalid Credentials!"
        />
      ) : null}
    </Container>
  );
}

export default LoginPage;

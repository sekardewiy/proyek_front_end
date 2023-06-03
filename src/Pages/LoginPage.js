import React from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const LoginPage = ({ handleLogin, loggedIn }) => {
  const initialValues = {
    username: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = (values) => {
    handleLogin();
  };

  if (loggedIn) {
    // Jika pengguna sudah login, redirect ke halaman beranda
    return <Navigate to="/home" replace />;
  }


  return (
    <div>
      <h1>Halaman Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <p>
        Belum punya akun? <Link to="/register">Daftar disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;

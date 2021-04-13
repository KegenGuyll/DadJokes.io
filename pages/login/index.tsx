import axios, { AxiosResponse } from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { PrivateUser } from '../../models/social/user';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../store/slices/profileSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const submit = async (event: any) => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/api/user/login', { email, password })
      .then((res: AxiosResponse<PrivateUser>) => {
        const token = res.data.body.sessionToken;

        localStorage.setItem('token', token);

        dispatch(setProfile(res.data));

        router.push('/');
      });
  };

  return (
    <main>
      <Head>
        <title>Login your Account</title>
      </Head>
      <article>
        <section className='flex flex-col md:flex-row h-screen items-center'>
          <div className='bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen'>
            <img
              src='https://source.unsplash.com/random'
              alt=''
              className='w-full h-full object-cover'
            />
          </div>

          <div
            className='bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center'>
            <div className='w-full h-100'>
              <h1 className='text-xl md:text-2xl font-bold leading-tight mt-12'>
                Login your account
              </h1>

              <form className='mt-6' onSubmit={submit} method='POST'>
                <div>
                  <label className='block text-gray-700'>Email Address</label>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    name=''
                    id=''
                    placeholder='Enter Email Address'
                    className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
                    autoFocus
                    autoComplete='email'
                    required
                  />
                </div>
                <div className='mt-4'>
                  <label className='block text-gray-700'>Password</label>
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    name=''
                    id=''
                    placeholder='Enter Password'
                    className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none'
                    required
                  />
                </div>
                <div className='text-right mt-2'>
                  <a
                    href='#'
                    className='text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700'>
                    Forgot Password?
                  </a>
                </div>
                <button
                  type='submit'
                  className='w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6'>
                  Log In
                </button>
              </form>
              <hr className='my-6 border-gray-300 w-full' />
              <p className='mt-8'>
                Need and account?{' '}
                <Link href='/register'>
                  <a
                    href='/register'
                    className='text-blue-500 hover:text-blue-700 font-semibold'>
                    Create an account
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Login;

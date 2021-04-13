import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Register = () => {
  return (
    <main>
      <Head>
        <title>Register Account</title>
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
                Register your account
              </h1>

              <form className='mt-6' action='#' method='POST'>
                <div>
                  <label className='block text-gray-700'>Username</label>
                  <input
                    type='lastName'
                    name=''
                    id=''
                    placeholder='Enter Username'
                    className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
                    autoFocus
                    required
                  />
                </div>
                <div className='mt-4'>
                  <label className='block text-gray-700'>Name</label>
                  <div className='flex flex-row'>
                    <input
                      type='firstName'
                      name=''
                      id=''
                      placeholder='Enter First Name'
                      className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none mr-4'
                      autoFocus
                      autoComplete='firstname'
                      required
                    />
                    <input
                      type='lastName'
                      name=''
                      id=''
                      placeholder='Enter Last Name'
                      className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none'
                      autoFocus
                      autoComplete='lastName'
                      required
                    />
                  </div>
                </div>

                <div className='mt-4'>
                  <label className='block text-gray-700'>Email Address</label>
                  <input
                    type='email'
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
                    name=''
                    id=''
                    placeholder='Enter Password'
                    className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none'
                    required
                  />
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
                already have an account?{' '}
                <Link href='/login'>
                  <a
                    href='/login'
                    className='text-blue-500 hover:text-blue-700 font-semibold'>
                    Login to account
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

export default Register;

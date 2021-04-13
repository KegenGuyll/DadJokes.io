import axios, { AxiosResponse } from 'axios';
import { NextPage } from 'next';
import React, { useState } from 'react';
import Head from 'next/head';
import { User, UserBody } from '../../../models/social/user';
import ProfilePicture from '../../../components/social/jokeSubmit/profilePicture';
import Navigation from '../../../components/social/Navigation';
import { ProfilePostPreview } from '../profilePostPreview';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

interface Props {
  user: User;
}

const UserProfile: NextPage<Props> = ({ user }) => {
  const { name, displayName, photoUrl, likes, posts, bio } = user;
  const [activePost, setActivePost] = useState<boolean>(true);
  const [activeLikes, setActiveLikes] = useState<boolean>(false);

  const togglePost = () => {
    setActivePost(true);
    setActiveLikes(false);
  };

  const toggleLikes = () => {
    setActivePost(false);
    setActiveLikes(true);
  };

  return (
    <Container>
      <Head>
        <title>{displayName} dadjokes.io profile</title>
        <meta name='description' content={bio} />
        <meta name='author' content={displayName}></meta>
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main className='my-5'>
        <article>
          <div className=' divide-y-2 divide-solid'>
            <section>
              <div className='flex flex-row place-items-center sm:block'>
                <div className='sm:flex sm:flex-row sm:place-items-center'>
                  <div className='w-40 h-40  sm:w-32 flex flex-row sm:mr-5'>
                    <ProfilePicture photoUrl={photoUrl} />
                  </div>
                  <div className='hidden sm:block'>
                    <h3>{displayName}</h3>
                    <div className='flex flex-row mt-4'>
                      <p className='mr-5 cursor-pointer' onClick={togglePost}>
                        <b>{posts.length} Post</b>
                      </p>
                      <p className='cursor-pointer' onClick={toggleLikes}>
                        <b>{likes.length} Liked Posts</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className=' hidden  sm:flex sm:flex-col sm:mt-3'>
                  <p className='mb-1'>
                    <b>{name}</b>
                  </p>
                  <p>{bio}</p>
                </div>

                <div className='ml-5 flex flex-col sm:hidden'>
                  <h3>{displayName}</h3>
                  <div className='flex flex-row mt-4'>
                    <p className='mr-5 cursor-pointer' onClick={togglePost}>
                      <b>{posts.length} Post</b>
                    </p>
                    <p className='cursor-pointer' onClick={toggleLikes}>
                      <b>{likes.length} Liked Posts</b>
                    </p>
                  </div>
                  <div className='flex flex-col mt-3'>
                    <p className='mb-1'>
                      <b>{name}</b>
                    </p>
                    <p>{bio}</p>
                  </div>
                </div>
              </div>
            </section>
            <section className='mt-5'>
              <div className='flex flex-row  w-full justify-center'>
                <span
                  onClick={togglePost}
                  className='mr-5  cursor-pointer py-3'
                  style={{
                    borderColor: 'black',
                    borderTopWidth: activePost ? '2px' : '0px',
                    marginTop: activePost ? '-2px' : '-0.5px',
                  }}>
                  POSTS
                </span>
                <span
                  onClick={toggleLikes}
                  className='cursor-pointer py-3'
                  style={{
                    borderColor: 'black',
                    borderTopWidth: activeLikes ? '2px' : '0px',
                    marginTop: activeLikes ? '-2px' : '-0.5px',
                  }}>
                  LIKES
                </span>
              </div>
              <div>
                {activePost ? (
                  <section className='grid grid-cols-3 gap-4 sm:grid-cols-1'>
                    {posts.reverse().map((_id, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.2 }}>
                        <ProfilePostPreview _id={_id} />
                      </motion.div>
                    ))}
                  </section>
                ) : (
                  <section className='grid grid-cols-3 gap-4 sm:grid-cols-1'>
                    {likes.reverse().map((_id, index) => (
                      <motion.div key={index} whileHover={{ scale: 1.2 }}>
                        <ProfilePostPreview _id={_id} />
                      </motion.div>
                    ))}
                  </section>
                )}
              </div>
            </section>
          </div>
        </article>
      </main>
    </Container>
  );
};

UserProfile.getInitialProps = async (context) => {
  const userId = context.query.id;

  const res: AxiosResponse<UserBody> = await axios.get(
    `http://dadjokes-beta.herokuapp.com/api/user/public/profile/${userId}`
  );

  return { user: res.data.body };
};

export default UserProfile;

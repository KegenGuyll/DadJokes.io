import React from 'react';

interface Props {
  photoUrl: string;
}

const ProfilePicture: React.FunctionComponent<Props> = ({ photoUrl }) => {
  return (
    <div className='w-2/6 sm:w-2/12 px-4'>
      <img
        src={photoUrl}
        alt='Profile Picture'
        className='rounded-full max-w-full h-auto border-none'
      />
    </div>
  );
};

export default ProfilePicture;

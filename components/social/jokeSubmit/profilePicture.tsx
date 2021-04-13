import React from 'react';

interface Props {
  photoUrl: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProfilePicture: React.FunctionComponent<Props> = ({
  photoUrl,
  className,
  style,
}) => {
  return (
    <div style={style} className={className}>
      <img
        src={photoUrl}
        alt='Profile Picture'
        className='rounded-full max-w-full h-auto border-none'
      />
    </div>
  );
};

export default ProfilePicture;

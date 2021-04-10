import React, { useState } from 'react';

const Rate: React.FunctionComponent = () => {
  const [like, setLike] = useState<boolean>(false);
  const [dislike, setDislike] = useState<boolean>(false);

  const onLike = () => {
    if (dislike) setDislike(false);
    setLike(!like);
  };

  const onDislike = () => {
    if (like) setLike(false);
    setDislike(!dislike);
  };

  return (
    <div className='flex flex-row'>
      <div className=' flex flex-row mr-3  align-baseline'>
        <span
          onClick={onLike}
          className='material-icons pr-2 cursor-pointer'
          style={{ color: like ? '#0093FF' : '#858585' }}>
          thumb_up
        </span>
        <p>150</p>
      </div>
      <div className='flex flex-row align-baseline'>
        <span
          onClick={onDislike}
          className='material-icons pr-2 cursor-pointer'
          style={{ color: dislike ? '#0093FF' : '#858585' }}>
          thumb_down
        </span>
        <p>6</p>
      </div>
    </div>
  );
};

export default Rate;

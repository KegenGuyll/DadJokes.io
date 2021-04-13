import React, { useEffect, useState } from 'react';
import { UserLikeInformation } from '../../../models/social/joke';
import { useSelector } from 'react-redux';
import fetch from '../../../utils/fetch';
import { RootState } from '../../../store';

interface Props {
  jokeId: string;
  likes: Array<UserLikeInformation>;
}

const Rate: React.FunctionComponent<Props> = ({ jokeId, likes }) => {
  const [like, setLike] = useState<boolean>(false);
  const [dislike, setDislike] = useState<boolean>(false);
  const { _id } = useSelector((state: RootState) => state.profile.user.body);

  useEffect(() => {
    likes.map((l) => {
      if (l.id === _id) setLike(true);
    });
  }, [jokeId, likes]);

  const onLike = () => {
    if (dislike) setDislike(false);
    setLike(!like);

    fetch({
      method: 'POST',
      url: `/api/user/like/${jokeId}`,
    });
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

        <p>{likes.length}</p>
      </div>
      {/* <div className='flex flex-row align-baseline'>
        <span
          onClick={onDislike}
          className='material-icons pr-2 cursor-pointer'
          style={{ color: dislike ? '#0093FF' : '#858585' }}>
          thumb_down
        </span>
        <p>6</p>
      </div> */}
    </div>
  );
};

export default Rate;

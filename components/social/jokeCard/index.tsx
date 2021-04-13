import React from 'react';
import { Card, Container } from 'react-bootstrap';
import TagComponent from './tag';
import { Tag } from '../../../models/social/tags';
import Rate from './rate';
import moment from 'moment';
import Link from 'next/link';
import { UserLikeInformation } from '../../../models/social/joke';

interface Props {
  tags: Array<Tag>;
  setup: string;
  punchline: string;
  author: string;
  authorId: string;
  date: string;
  id: string;
  likes: Array<UserLikeInformation>;
}

interface ProfileLinkProps {
  author: {
    name: string;
    id: string;
  };
}

export const ProfieLink: React.FunctionComponent<ProfileLinkProps> = ({
  author,
}) => (
  <Link href={`/profile/${author.id}`}>
    <a href={`/profile/${author.id}`}> {author.name} </a>
  </Link>
);

const JokeCard: React.FunctionComponent<Props> = ({
  tags,
  setup,
  punchline,
  author,
  date,
  id,
  likes,
  authorId,
}) => {
  return (
    <Card className='mb-5' style={{ maxWidth: '830px' }}>
      <Card.Body>
        <Container>
          <div className='flex flex-row pb-5'>
            {tags.map(({ text, textColor, color, icon }, index) => (
              <TagComponent
                key={index}
                textColor={textColor}
                color={color}
                icon={icon}>
                {text}
              </TagComponent>
            ))}
          </div>
          <h2 className=' pb-16'>{setup}</h2>
          <h4 className='pb-16'>{punchline}</h4>
          <div className='mb-3'>
            By,{' '}
            <ProfieLink
              author={{
                name: author,
                id: authorId,
              }}
            />{' '}
            {`${moment(Number(date) * 1000).format('MMMM Do YYYY')}`}
          </div>
          <Rate jokeId={id} likes={likes} />
        </Container>
      </Card.Body>
    </Card>
  );
};

export default JokeCard;

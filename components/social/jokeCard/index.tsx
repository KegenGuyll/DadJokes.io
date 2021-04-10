import React from 'react';
import { Card, Container } from 'react-bootstrap';
import TagComponent from './tag';
import { Tag } from '../../../models/social/tags';

interface Props {
  tags: Array<Tag>;
  setup: string;
  punchline: string;
  author: string;
  authorId: string;
  date: string;
  id: string;
}

const JokeCard: React.FunctionComponent<Props> = ({
  tags,
  setup,
  punchline,
  author,
  date,
}) => {
  return (
    <Card style={{ maxWidth: '830px' }}>
      <Card.Body>
        <Container>
          <div className='flex flex-row pb-5'>
            {tags.map(({ text, textColor, color, icon }) => (
              <TagComponent textColor={textColor} color={color} icon={icon}>
                {text}
              </TagComponent>
            ))}
          </div>
          <h2 className=' pb-16'>{setup}</h2>
          <h4 className='pb-16'>{punchline}</h4>
          <p>{`by, ${author} ${date}`}</p>
          <p>Likes and Dislikes</p>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default JokeCard;

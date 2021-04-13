import React from 'react';
import { Card, Container } from 'react-bootstrap';
import useJokeById from '../../hooks/api/useJokeById';

interface Props {
  _id: string;
}

export const ProfilePostPreview: React.FunctionComponent<Props> = ({ _id }) => {
  const { joke, isLoading, isError } = useJokeById(_id);
  return (
    <>
      {!isLoading && (
        <Card className='m-3'>
          <Card.Body style={{ height: '300px', overflow: 'auto' }}>
            <Container>
              <h4 className='pb-16'>{joke.body.setup}</h4>
              <h6 className='pb-16'>{joke.body.punchline}</h6>
            </Container>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

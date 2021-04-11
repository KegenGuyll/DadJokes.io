import React from 'react';
import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import ProfilePicture from './profilePicture';
import { motion, AnimatePresence } from 'framer-motion';

const JokeSubmit: React.FunctionComponent = () => {
  const [focused, setFocus] = useState<boolean>(false);
  const [punchline, setPunchline] = useState<string>('');
  const [setup, setSetup] = useState<string>('');
  const [type, setType] = useState<string>('');

  const toggleFocus = () => {
    setFocus(!focused);
  };

  return (
    <Card tabIndex={-1} className='my-5' style={{ maxWidth: '830px' }}>
      <motion.div
        style={{ padding: '1.25rem' }}
        initial={{
          height: focused ? '240px' : '123.33px',
        }}
        animate={{
          height: focused ? '240px' : '123.33px',
        }}>
        <div
          className={`flex flex-row ${focused ? '' : 'place-items-center '} `}>
          <ProfilePicture photoUrl='https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg' />
          <AnimatePresence initial={false}>
            {focused ? (
              <div className='w-4/6'>
                <Form>
                  <Form.Group controlId='formBasicSetup'>
                    <Form.Control
                      type='text'
                      placeholder='Setup'
                      onChange={(e) => setSetup(e.currentTarget.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicSetup'>
                    <Form.Control
                      type='text'
                      placeholder='Punchline'
                      onChange={(e) => setSetup(e.currentTarget.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicSetup'>
                    <Form.Control type='text' placeholder='Type' />
                  </Form.Group>
                  <div className='float-right'>
                    <Button
                      onClick={toggleFocus}
                      style={{
                        backgroundColor: '#E5E7EB',
                        color: 'black',
                        border: 'unset',
                      }}
                      className='mr-2'
                      variant='secondary'
                      type='submit'>
                      Cancel
                    </Button>
                    <Button
                      style={{ backgroundColor: '#0093FF', border: 'unset' }}
                      variant='primary'
                      type='submit'>
                      Post
                    </Button>
                  </div>
                </Form>
              </div>
            ) : (
              <h5
                onClick={toggleFocus}
                className='cursor-pointer w-full'
                style={{ color: '#A8A8A8' }}>
                Got a Joke?
              </h5>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Card>
  );
};

export default JokeSubmit;

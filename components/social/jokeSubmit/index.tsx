import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import ProfilePicture from './profilePicture';
import { motion, AnimatePresence } from 'framer-motion';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import fetch from '../../../utils/fetch';

const JokeSubmit: React.FunctionComponent = () => {
  const user = useSelector((state: RootState) => state.profile.user.body);
  const [focused, setFocus] = useState<boolean>(false);
  const [punchline, setPunchline] = useState<string>('');
  const [setup, setSetup] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const { photoUrl } = user;

  const toggleFocus = () => {
    setFocus(!focused);
  };

  const submit = async (e: any) => {
    e.preventDefault();
    const data = {
      setup,
      punchline,
      type,
    };
    await fetch({ method: 'POST', url: '/api/joke/create', data });
  };

  useEffect(() => {
    if (setup !== '' && punchline !== '' && type !== '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [setup, punchline, type]);

  return (
    <>
      {user._id ? (
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
              className={`flex flex-row ${
                focused ? '' : 'place-items-center '
              } `}>
              <ProfilePicture
                style={{ width: '95px', height: '95px', marginRight: '1rem' }}
                photoUrl={photoUrl}
              />
              <AnimatePresence initial={false}>
                {focused ? (
                  <div className='w-4/6'>
                    <Form onSubmit={submit}>
                      <Form.Group controlId='formBasicSetup'>
                        <Form.Control
                          required
                          type='text'
                          placeholder='Setup'
                          onChange={(e) => setSetup(e.currentTarget.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId='formBasicSetup'>
                        <Form.Control
                          required
                          type='text'
                          placeholder='Punchline'
                          onChange={(e) => setPunchline(e.currentTarget.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId='formBasicSetup'>
                        <Form.Control
                          onChange={(e) => setType(e.currentTarget.value)}
                          required
                          type='text'
                          placeholder='Type'
                        />
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
                          disabled={!disabled}
                          style={{
                            backgroundColor: '#0093FF',
                            border: 'unset',
                          }}
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
      ) : null}
    </>
  );
};

export default JokeSubmit;

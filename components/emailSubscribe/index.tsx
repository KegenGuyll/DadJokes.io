import axios from 'axios';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import jsonp from 'jsonp';

interface Props {
  messages?: {
    sending: string;
    success: string;
    error: string;
    empty: string;
    duplicate: string;
    button: string;
  };
  buttonClassName?: string;
  styles?: {
    sendingMsg: {
      color: string;
    };
    successMsg: {
      color: string;
    };
    duplicateMsg: {
      color: string;
    };
    errorMsg: {
      color: string;
    };
  };
}

const EmailSubscribe: React.FunctionComponent<Props> = (props) => {
  const { styles, messages } = props;
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState('');
  const action =
    'https://dadjokes.us7.list-manage.com/subscribe/post?u=ec1905331ca6238197ef05a9c&amp;id=64f51acaf2';

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const path = `${action}&EMAIL=${email}&c=__jp0`;
    const url = path.replace('/post?', '/post-json?');
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    !regex.test(email) ? setStatus('empty') : sendData(url);
  };

  const sendData = (url) => {
    setStatus('sending');

    jsonp(url, { param: 'c' }, (err, data) => {
      if (data.msg.includes('already subscribed')) {
        setStatus('duplicate');
      } else if (err) {
        setStatus('error');
      } else if (data.result !== 'success') {
        setStatus('error');
      } else {
        setStatus('success');
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          onChange={(e) => setEmail(e.currentTarget.value)}
          type='text'
          placeholder='you@domain.com'></Form.Control>
      </Form.Group>
      <Button variant='dark' type='submit' style={{ marginBottom: '15px' }}>
        Subscribe
      </Button>
      <div className='msg-alert'>
        {status === 'sending' && (
          <p style={styles.sendingMsg}>{messages.sending}</p>
        )}
        {status === 'success' && (
          <p style={styles.successMsg}>{messages.success}</p>
        )}
        {status === 'duplicate' && (
          <p style={styles.duplicateMsg}>{messages.duplicate}</p>
        )}
        {status === 'empty' && <p style={styles.errorMsg}>{messages.empty}</p>}
        {status === 'error' && <p style={styles.errorMsg}>{messages.error}</p>}
      </div>
    </Form>
  );
};

EmailSubscribe.defaultProps = {
  messages: {
    sending: 'Sending...',
    success: 'Thank you for subscribing!',
    error: 'An unexpected internal error has occurred.',
    empty: 'You must write an e-mail.',
    duplicate: 'Too many subscribe attempts for this email address',
    button: 'Subscribe!',
  },
  buttonClassName: '',
  styles: {
    sendingMsg: {
      color: '#0652DD',
    },
    successMsg: {
      color: '#009432',
    },
    duplicateMsg: {
      color: '#EE5A24',
    },
    errorMsg: {
      color: '#ED4C67',
    },
  },
};

export default EmailSubscribe;

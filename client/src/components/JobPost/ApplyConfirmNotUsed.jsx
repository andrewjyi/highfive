import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

const ApplyConfirmModal = () => {
  return (
    <div>
      <Modal trigger={<Button>Apply!</Button>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src="/assets/images/avatar/large/rachel.png" />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p> We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default ApplyConfirmModal;

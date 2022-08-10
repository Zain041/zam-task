import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = (props)=> {
    return (
      <div>
        <Modal isOpen={props.open} toggle={props.toggle} className={props.className}>
          <ModalHeader toggle={props.toggle}>Confirm</ModalHeader>
          <ModalBody>
            <h1>Are You Sure</h1>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={props.toggle}>Cancel</Button>
            <Button color='danger' onClick={props.delete}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

export default DeleteModal
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

interface Props {
  isOpen: boolean;
  title: string;
  body: React.ReactNode;
  actionNm: string;
  actionFn: () => void;
}

const ErrorModal = ({ isOpen, title, body, actionNm, actionFn }: Props) => (
  <Modal isOpen={isOpen} data-testid="error-modal">
    <ModalHeader>{title} </ModalHeader>

    <ModalBody>{body}</ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={actionFn}>
        {actionNm}
      </Button>
    </ModalFooter>
  </Modal>
);

export default ErrorModal;

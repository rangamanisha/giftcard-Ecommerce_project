import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import checkbox from '../assets/checkbox.svg';

function modal(props) {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="text-center">
        <img src={checkbox} className="mr-3" style={{ width: '65px' }} alt="Icon" />
        <h1>Successful!</h1>
        <p className="pt-3">Gift card successfully converted to points.</p>
        <Button className="popup-btn" variant="info" onClick={props.onHide}>
          ok
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default modal;

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Failed from "../assets/failed.svg";

function modal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="text-center">
        <img
          src={Failed}
          className="mr-3"
          style={{ width: "65px" }}
          alt="Icon"
        />
        <h1>Already Redeemed!</h1>
        <p className="pt-3">Your gift card has already been redeemed.</p>
        <Button className="popup-btn" variant="info" onClick={props.onHide}>
          ok
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default modal;

import Button from './Button';

const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;
  // Modal content
  // Display thank you message and rating

  return ( <div className="modal-overlay">
          <div className="modal">
            <h2>Thank You</h2>
            <p>
              You rated us {rating} star{rating > 1 ? 's' : ''}
            </p>
            <Button className="close-btn" onClick={onClose}>
              Close
            </Button>
          </div>
        </div> );
}

export default Modal;
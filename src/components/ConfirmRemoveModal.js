import React from 'react'
import Modal from 'react-modal'

const ConfirmRemoveModal = props => (
  <Modal
    isOpen={props.modalIsOpen}
    contentLabel="Remove?"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Are you sure?</h3>
    <p className="modal__subtitle">You will not be able to recover this expense.</p>
    <div className="button-group">
      <button className="button button--secondary" onClick={props.handleCancelRemove}>Cancel</button>
      <button className="button button--warning" onClick={props.handleConfirmRemove}>Yes, delete it!</button>
    </div>
  </Modal>
)

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#app')

export default ConfirmRemoveModal
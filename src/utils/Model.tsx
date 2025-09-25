import ReactDOM from "react-dom";

const modalRoot: any = document.getElementById("root");

function Modal({ children }: any) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;

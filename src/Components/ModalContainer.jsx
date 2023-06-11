import { useEffect } from "react";


const ModalContainer = ({ isOpen, closeModal, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed  bg-black bg-opacity-50"></div>
      <div className="">{children}</div>
    </div>
  );
};

export default ModalContainer;

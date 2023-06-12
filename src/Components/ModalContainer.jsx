import { useEffect } from "react";


const ModalContainer = ({ isOpen, closeModal, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])
  if (!isOpen) {
    return null;
  }
  return (
    <div className=" absolute flex bg-black bg-opacity-50  items-center justify-center">
      {children}
    </div>
  );
};

export default ModalContainer;

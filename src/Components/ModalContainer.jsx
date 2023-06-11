

const ModalContainer = ({ isOpen, closeModal, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed  bg-black bg-opacity-50"></div>
      <div className="shadow-lg p-6">{children}</div>
    </div>
  );
};

export default ModalContainer;

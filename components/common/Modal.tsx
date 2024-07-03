import { FC } from "react";
import { motion } from "framer-motion";

interface ModalProps {
  onClose: () => void;
  number: number | string;
}

const Modal: FC<ModalProps> = ({ onClose, number }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <motion.div
        className="bg-white rounded-lg p-11 w-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl mb-4">Success</h2>
        <p className="mb-4">
          The number {number} has been submitted successfully!
        </p>
        <button
          onClick={onClose}
          className="border-2 border-blue-500 text-blue-500 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:shadow-lg"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;

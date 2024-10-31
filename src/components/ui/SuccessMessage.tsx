import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface SuccessMessageProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const SuccessMessage = ({ message, isVisible, onClose }: SuccessMessageProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-white px-6 py-4 rounded-lg shadow-elegant flex items-center gap-3">
            <CheckCircleIcon className="w-6 h-6 text-green-500" />
            <p className="text-marine">{message}</p>
            <button 
              onClick={onClose}
              className="ml-4 text-marine/40 hover:text-marine transition-colors"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessMessage; 
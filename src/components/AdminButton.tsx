import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AdminLogin from "./AdminLogin";
import { Button } from "./Button";

interface AdminButtonProps {
  onLogin: () => void;
}

export default function AdminButton({ onLogin }: AdminButtonProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex justify-center mt-8">
        <Button onClick={() => setShowModal(true)}>Iniciar sesión Admin</Button>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-lg p-6 w-full max-w-md relative max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>

              <AdminLogin
                onLogin={() => {
                  onLogin();
                  setShowModal(false);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

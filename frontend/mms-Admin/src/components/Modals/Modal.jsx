/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';

import ModalBackdrop from './ModalBackdrop';

function Modal({ content }) {
  const open = useSelector((state) => state.modal.isOpen);
  // framer motion animation for the modal window
  const fade = {
    hidden: {
      opacity: 0,
      transition: {
        delay: 1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 1,
      },
    },
  };
  return (
    <div>
      {/* this is the password reset modal,
       ** it pops-up when the user has sucessfully reset his/her password */}

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {open && (
          <ModalBackdrop>
            <motion.div
              className="relative z-50 bg-white w-[80%] md:w-[50%] py-[28px] px-[20px] rounded-[20px] flex flex-col items-center"
              aria-hidden="true"
              onClick={(e) => e.stopPropagation()}
              variants={fade}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {content}
            </motion.div>
          </ModalBackdrop>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Modal;

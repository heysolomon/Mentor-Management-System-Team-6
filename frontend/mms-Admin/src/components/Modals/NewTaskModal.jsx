import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalNew } from '../../redux/features/tasks/tasksSlice';
import ProfileModal from './ProfileModal';
import { NewTaskImgModal } from '../../assets/images';

function NewTasksModal() {
  const open = useSelector((state) => state.tasks.newtaskOpen);
  const dispatch = useDispatch();
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
          <ProfileModal>
            <motion.div
              className="relative z-50 bg-white w-[80%] md:w-[50%] py-[28px] px-[20px] rounded-[20px] flex flex-col items-center"
              aria-hidden="true"
              onClick={(e) => e.stopPropagation()}
              variants={fade}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="font-mukta font-[600] text-black1 text-[18px] md:text-[24px]">
                Task created successfully
              </h2>
              <NewTaskImgModal styling="mt-[28px] mb-5" />
              <div className="flex">

                <button
                  onClick={() => dispatch(closeModalNew())}
                  type="button"
                  className="bg-pri3 py-2.5 px-10 rounded-md text-white font-semibold mx-1"

                >
                  Done
                </button>
              </div>
            </motion.div>
          </ProfileModal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NewTasksModal;

/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import { ArrowDown } from '../../assets/images';
import EditPost from '../Modals/EditPost';
import { openModal } from '../../redux/features/Modals/modalSlice';
import { tasks } from '../../services/api';
import DeletePost from '../Modals/DeletePost';
import { deletePostFailure,
  deletePostStart,
  deletePostSuccess } from '../../redux/features/forumSlice';

function PostDropdown({ post, setIsOptionClicked }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);

  const { userInfo } = useSelector((state) => state.user);
  const { isDeleting } = useSelector((state) => state.forum);
  const userToken = userInfo.data.access_token;

  const handleToggle = () => {
    setIsOpen(!isOpen);

    setTimeout(() => {
      setIsOptionClicked(false);
    }, 600);
  };

  const handleEditClick = () => {
    setIsOpen(false);
    dispatch(openModal(<EditPost post={post} />, false));
    setIsOptionClicked(false);
  };

  const handleDeleteClick = () => {
    dispatch(deletePostStart());
    tasks
      .delete(`/post/${post.id}`, {
        headers: {
          Authorization: `bearer ${userToken}`,
        },
      })
      .then(() => {
        // console.log(res);
        setIsOpen(false);
        setIsOptionClicked(false);
        dispatch(openModal(<DeletePost />));
        dispatch(deletePostSuccess(post));
      })
      .catch(() => {
        dispatch(deletePostFailure());
        // console.log(err);
      });
  };

  // framer motion animation for the PostDropdown
  const drop = {
    hidden: {
      height: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        duration: 1,
      },
    },
    visible: {
      height: '78px',
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
    exit: {
      height: '0',
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };
  // animation variants for tthe dropdown options
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: 2,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className="relative text-black2 font-[400] text-[16px] py-[4px] px-[8px] bg-white flex items-center hover:cursor-pointer w-24">
      <div className="flex w-full items-center justify-end">
        <button
          className="flex"
          onClick={handleToggle}
          aria-hidden="true"
          type="button"
        >
          <ArrowDown
            styling={
              isOpen ? 'rotate-180 duration-700' : 'duration-700 rotate-0'
            }
          />
        </button>
      </div>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {isOpen && (
          <motion.ul
            variants={drop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-[32px] left-0 rounded-lg shadow-xl z-30 w-full bg-white px-[8px]"
          >
            {/* this is the options for the custom dropdown */}
            <motion.li
              onClick={handleEditClick}
              aria-hidden="true"
              className="hover:bg-pri11"
              initial="closed"
              animate="open"
              exit="exit"
              variants={itemVariants}
            >
              edit post
            </motion.li>
            <motion.li
              onClick={() => handleDeleteClick()}
              aria-hidden="true"
              className="hover:bg-pri11"
              initial="closed"
              animate="open"
              exit="exit"
              variants={itemVariants}
            >
              {isDeleting ? (
                <div className="flex w-full justify-center">
                  <SpinnerCircular
                    color="#F7FEFF"
                    className="mr-2"
                    thickness={250}
                    size={20}
                  />
                </div>
              ) : (
                'delete post'
              )}
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PostDropdown;

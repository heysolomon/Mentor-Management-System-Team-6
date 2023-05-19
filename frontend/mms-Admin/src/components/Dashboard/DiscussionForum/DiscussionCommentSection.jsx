/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import * as Yup from 'yup';
import { AttachmentIcon, EmojiIcon } from '../../../assets/images';
import { createCommentFailure,
  createCommentStart,
  createCommentSuccess } from '../../../redux/features/forumSlice';
import { baseURL } from '../../../services/api';
import FormikForm from '../../FormikForm/FormikForm';
import InputField from '../../InputField';
import DiscussionComment from './DiscussionComment';

function DiscussionCommentSection({ post }) {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);
  const { isLoadingComment } = useSelector((state) => state.forum);

  const userToken = userInfo.data.access_token;

  const initialValues = {
    content: '',
  };

  const validate = Yup.object({
    content: Yup.string().required(''),
  });

  const createComment = async (values) => {
    dispatch(createCommentStart());
    // console.log(values);
    try {
      await baseURL.post(
        '/post/comment',
        {
          ...values,
          postId: post.id,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      dispatch(createCommentSuccess());
      // console.log(newTask);
      // setMessage(changeUserPasswordRequest.data.message);
    } catch (err) {
      if (err) {
        dispatch(createCommentFailure());
        // setMessage(err.response.data.message);
      }
    }
  };
  const submit = async (values) => {
    createComment(values);
  };
  return (
    <div className="">
      <FormikForm
        initialValues={initialValues}
        validationSchema={validate}
        submit={submit}
        className="mt-[41px] w-full bg-pri11 h-[120px] border-pri10 border-[1px] rounded-[5px] px-[20px] py-[16px] flex flex-col justify-between"
      >
        <InputField
          border={false}
          tag="input"
          type="text"
          name="content"
          className="w-full focus:outline-none bg-transparent py-[8px] placeholder:text-black5 text-black5 text-mukta font-[400] text-[16px]"
          placeholder="Write a comment..."
        />
        <div className="flex justify-between">
          <div className="flex">
            <button type="button" className="mr-[17px]">
              <EmojiIcon color="#808080" />
            </button>
            <button type="button">
              <AttachmentIcon color="#808080" />
            </button>
          </div>

          <button
            className="bg-pri3 h-[24px] flex items-center justify-center text-white duration-700 text-[12px] font-[400] hover:bg-pri2 py-2 rounded-[5px] px-3"
            type="submit"
          >
            {isLoadingComment ? (
              <SpinnerCircular
                color="#F7FEFF"
                className="mr-2"
                thickness={250}
                size={20}
              />
            ) : (
              'Post Comment'
            )}
          </button>
        </div>
      </FormikForm>
      {/* comments */}
      {post.comments.length > 0 && (
        <div className="border-[1px] border-black9 rounded-[10px] h-full px-[20px] pb-[20px] min-h-[40px] w-full mt-[23px]">
          {post.comments.map((comment) => (
            <DiscussionComment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}

export default DiscussionCommentSection;

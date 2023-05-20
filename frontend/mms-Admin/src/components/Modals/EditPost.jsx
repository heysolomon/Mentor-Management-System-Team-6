/* eslint-disable react/prop-types */
import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerCircular } from 'spinners-react';
import { AttachmentIcon, CloseIcon, EmojiIcon } from '../../assets/images';
import { editPostFailure,
  editPostStart,
  editPostSuccess } from '../../redux/features/forumSlice';
import { closeModal, openModal } from '../../redux/features/Modals/modalSlice';
import { tasks } from '../../services/api';
import FormikForm from '../FormikForm/FormikForm';
import InputField from '../InputField';
import Button from '../utilities/Buttons/Button';
import EditPostSuccess from './EditPostSuccess';

function EditPost({ post }) {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { isEditing } = useSelector((state) => state.forum);

  const userToken = userInfo.data.access_token;

  // const [message, setMessage] = useState('');

  const initialValues = {
    title: '',
    content: '',
  };

  const validate = Yup.object({
    title: Yup.string().max(
      32,
      'The title must contain a maximum of 32 characters',
    ),
    content: Yup.string(),
  });

  const editPost = async (values) => {
    dispatch(editPostStart());
    // console.log(values);
    try {
      await tasks.patch(
        `/post/${post.id}`,
        {
          ...values,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      dispatch(editPostSuccess());
      dispatch(closeModal());
      dispatch(openModal(<EditPostSuccess />));
      // console.log(newTask);
      // setMessage(changeUserPasswordRequest.data.message);
    } catch (err) {
      if (err) {
        dispatch(editPostFailure());
        // setMessage(err.response.data.message);
      }
    }
  };
  const submit = async (values) => {
    editPost(values);
  };

  return (
    <div className="p-[20px] flex flex-col w-full">
      <div className="flex justify-between w-full items-center">
        <h2 className="text-black1 font-[600] text-[24px]">New Topic</h2>

        <button type="button" onClick={() => dispatch(closeModal())}>
          <CloseIcon color="#058B94" />
        </button>
      </div>

      <FormikForm
        initialValues={initialValues}
        validationSchema={validate}
        submit={submit}
        className="mt-[29px]"
        styling="flex justify-center items-center flex-col"
      >
        <InputField
          tag="input"
          type="text"
          name="title"
          placeholder={post.title}
          styling="mb-[20px]"
          width="w-full"
          inputStyle="text-[20px] pl-[30px]"
        />
        <div className="flex flex-col justify-between border-[1px] border-black8 rounded-[5px] pl-[30px] py-5 focus-within:border-pri3 focus-within:ring-pri3 focus-within:ring-1">
          <InputField
            border={false}
            tag="textarea"
            name="content"
            placeholder={post.content}
            inputStyle="font-[400] placeholder:text-black5 text-[20px] pl-0 ml-0"
          />
          <div className="flex">
            <EmojiIcon color="#058B94" styling="mr-3" />
            <AttachmentIcon color="#058B94" />
          </div>
        </div>

        {/* {editError && (
          <div className="flex justify-center">
            <p
              className={`font-[400] text-black5 font-mukta text-[16px] mt-[20px] ${
                editError ? 'text-red-500' : 'text-pri2'
              }`}
            >
              {message}
            </p>
          </div>
        )} */}

        <div className="flex w-full justify-end mt-[62px]">
          <Button width="w-[30%]">
            {isEditing ? (
              <SpinnerCircular
                color="#F7FEFF"
                className="mr-2"
                thickness={250}
                size={20}
              />
            ) : (
              'Post to Forum'
            )}
          </Button>
        </div>
      </FormikForm>
    </div>
  );
}

export default EditPost;

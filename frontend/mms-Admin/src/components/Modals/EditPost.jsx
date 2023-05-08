import React from 'react';
import { useDispatch } from 'react-redux';
import { AttachmentIcon, CloseIcon, EmojiIcon } from '../../assets/images';
import { closeModal, openModal } from '../../redux/features/Modals/modalSlice';
import FormikForm from '../FormikForm/FormikForm';
import InputField from '../InputField';
import Button from '../utilities/Buttons/Button';
import EditPostSuccess from './EditPostSuccess';

function EditPost() {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setTimeout(() => {
      dispatch(closeModal());
    }, 2000);
    dispatch(openModal(<EditPostSuccess />));
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
        // initialValues={initialValues}
        className="mt-[29px]"
        styling="flex justify-center items-center flex-col"
      >
        <InputField
          tag="input"
          type="text"
          name="title"
          placeholder="The New MMS Discussion Forum Guidelines and Regulations"
          styling="mb-[20px]"
          width="w-full"
          inputStyle="text-[20px] pl-[30px]"
        />
        <div className="flex flex-col justify-between border-[1px] border-black8 rounded-[5px] pl-[30px] py-5">
          <textarea
            name="about"
            id="about"
            cols={100}
            // rows={4}
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enilf."
            className="flex resize-none focus:outline-none bg-transparent placeholder:text-black5 text-black5 text-mukta font-[400] h-[96px] w-full text-[20px] pl-0 ml-0 overflow-y-auto scroll"
            placeholder="Start typing..."
          />
          <div className="flex">
            <EmojiIcon color="#058B94" styling="mr-3" />
            <AttachmentIcon color="#058B94" />
          </div>
        </div>

        <div className="flex w-full justify-end mt-[62px]">
          <Button width="w-[30%]" onClick={handleSubmit}>
            Post to Forum
          </Button>
        </div>
      </FormikForm>
    </div>
  );
}

export default EditPost;

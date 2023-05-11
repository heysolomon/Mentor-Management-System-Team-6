import React from 'react';
import { useDispatch } from 'react-redux';
import FormikForm from '../FormikForm/FormikForm';
import InputField from '../InputField';
import AddMentorSuccess from './AddMentorSuccess';
import { openModal } from '../../redux/features/Modals/modalSlice';

function AddMentor() {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
  };
  return (
    <div className="w-full h-full px-10">
      <h2 className="font-[600] text-[24px] text-center">Add Mentor</h2>

      <FormikForm
        // submit={submit}
        initialValues={initialValues}
        // validationSchema={validate}
        className="mt-[77px]"
      >
        <InputField
          tag="input"
          type="email"
          name="email"
          placeholder="samuelkebede@gmail.com"
          styling="h-[50px]"
          width="w-full"
          inputStyle="text-[16px] pl-[15px] py-[11px] h-full"
        />

        <div className="grid grid-cols-2 gap-x-[28px] w-[53%] mx-auto h-[50px] mt-[77px]">
          <button
            type="button"
            className="border-[1px] border-pri3 rounded-[10px] font-[600] text-[18px] text-[#023C40] hover:bg-pri10 duration-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-pri3 rounded-[10px] font-[600] text-[18px] text-white hover:bg-pri2 duration-700"
            onClick={() => dispatch(openModal(<AddMentorSuccess />))}
          >
            Submit
          </button>
        </div>
      </FormikForm>
    </div>
  );
}

export default AddMentor;

import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../redux/features/Modals/modalSlice';
import FormikForm from '../../FormikForm/FormikForm';
import InputField from '../../InputField';
import { addQ } from '../../../redux/features/criteriaSlice';
import { CircleAddIcon } from '../../../assets/images';

function MultipleInputModal() {
  const dispatch = useDispatch();
  const formValue = {
    question: '',
  };

  const options = [
    {
      id: 1,
      name: '1 Input',
    },
    {
      id: 2,
      name: '2 Inputs',
    },
    {
      id: 3,
      name: '3 Inputs',
    },
  ];

  const validate = Yup.object({
    question: Yup.string().required(''),
  });

  const addQuestion = async (values) => {
    const newValues = {
      type: 'multipleInput',
      ...values,
    };
    dispatch(addQ(newValues));
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  const submit = async (values) => {
    addQuestion(values);
    dispatch(closeModal());
  };
  return (
    <div className="p-5 w-full h-full">
      <h1 className="font-[600] text-[28px] text-black2 mb-[47px]">
        Input Single Question
      </h1>

      <FormikForm
        initialValues={formValue}
        submit={submit}
        validationSchema={validate}
      >
        <InputField
          type="text"
          tag="input"
          name="question"
          placeholder="Enter the question"
          styling="h-[60px]"
          inputStyle="py-3 pl-4"
        />
        <InputField
          type="text"
          tag="select"
          options={options}
          name="inputNumber"
          placeholder="Enter the question"
          styling="h-[60px] mt-5"
          inputStyle="py-3 pl-4"
        />
        <div className="flex mt-[20px]">
          <button type="button" className="mr-[10px]">
            <CircleAddIcon color="#058B94" />
          </button>
          <p className="font-[400] text-[18px] text-black5">
            Add another question
          </p>
        </div>
        <div className="mt-24 flex justify-between">
          <button
            onClick={handleClose}
            type="button"
            className="border-[1px] border-pri3 rounded-[10px] font-[600] text-[14px] text-[#023C40] hover:bg-pri10 duration-700 h-[47px] px-10"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-pri3 rounded-[10px] font-[600] text-[14px] text-white hover:bg-pri2 duration-700 h-[47px] mr-[10px] px-10"
          >
            Done
          </button>
        </div>
      </FormikForm>
    </div>
  );
}

export default MultipleInputModal;

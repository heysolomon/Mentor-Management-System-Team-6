/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, useEffect } from 'react';
import './Tasks.css';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RiSearchLine } from 'react-icons/ri';
import { BsFilter, BsPlusCircle } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import { SpinnerCircular } from 'spinners-react';
import { RemoveIcon, UserAvatar } from '../../../assets/images';
import { openModal } from '../../../redux/features/Modals/modalSlice';
import CreateTask from '../../../components/Modals/CreateTask';
import FormikForm from '../../../components/FormikForm/FormikForm';
import InputField from '../../../components/InputField';
import { createTaskFailure,
  createTaskStart,
  createTaskSuccess } from '../../../redux/features/taskSlice';
import { tasks } from '../../../services/api';
import TaskLoading from '../../../components/Dashboard/Tasks/TasksLoading';

function NewTask() {
  const [checked, setChecked] = useState(false);
  const [sort, setSort] = useState(false);
  const [mentorsOpen, setMentorsOpen] = useState(true);
  const [mentorsmanagersOpen, setmentorsmanagersOpen] = useState(false);

  const [allMentors, setAllmentors] = useState([]);
  const [allMentorsManagers, setAllmentorsManagers] = useState([]);
  const [searchText, setSearch] = useState('');
  const [selectedMentors, setSelectedMentors] = useState([]);
  const [selectedMentorsManagers, setSelectedMentorsManagers] = useState([]);

  const { userInfo } = useSelector((state) => state.user);
  const userToken = userInfo.data.access_token;

  const dispatch = useDispatch();

  const search = () => {
    setChecked(true);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const { isLoading } = useSelector((state) => state.tasks);

  const initialValues = {
    title: '',
    description: '',
    task_id: 123,
  };

  const validate = Yup.object({
    title: Yup.string()
      .max(32, 'The title must contain a maximum of 32 characters')
      .required('The task title is required'),
    description: Yup.string().required('The task description is required'),
  });

  const createTask = async (values) => {
    dispatch(createTaskStart());
    // console.log(values);
    try {
      await tasks.post(
        '/tasks',
        {
          ...values,
          mentors: selectedMentors,
          mentorManagers: selectedMentorsManagers,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      dispatch(createTaskSuccess());
      dispatch(openModal(<CreateTask />));
      // console.log(newTask);
      // setMessage(changeUserPasswordRequest.data.message);
    } catch (err) {
      if (err) {
        dispatch(createTaskFailure());
        // console.log();
        // setMessage(err.response.data.message);
      }
    }
  };
  const submit = async (values) => {
    createTask(values);
  };

  const pushMentors = (mentorSelected) => {
    if ((selectedMentors.includes(mentorSelected)) !== true) {
      setSelectedMentors(() => [...selectedMentors, mentorSelected]);
    }
  };
  const pushMentorsManagers = (mentorSelected) => {
    if ((selectedMentorsManagers.includes(mentorSelected)) !== true) {
      setSelectedMentorsManagers(() => [...selectedMentorsManagers, mentorSelected]);
    }
  };
  const removeMentors = () => {
    setSelectedMentors([]);
  };

  const removeMentorsManagers = () => {
    setSelectedMentorsManagers([]);
  };
  const fetchMentors = () => {
    fetch('http://172.105.50.46:8080/users/mentors', {
      headers: {
        Authorization: `bearer ${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllmentors(data.data.mentors);
      });
  };

  const fetchMentorsManagers = () => {
    fetch('http://172.105.50.46:8080/users/mentor-managers', {
      headers: {
        Authorization: `bearer ${userToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAllmentorsManagers(data.data.mentorManagers);
      });
  };

  useEffect(() => {
    fetchMentors();
    fetchMentorsManagers();
  });

  return (
    <div className="h-full overflow-y-auto scroll pr-[10px] pb-36">
      <div className="">
        <h1 className="font-[600] tasksH grow flex-basis-1 w-full">New Task</h1>
        <div className="max-lg:flex-col-reverse flex grow flex-row max-lg:mt-5 h-full">
          <FormikForm
            initialValues={initialValues}
            validationSchema={validate}
            submit={submit}
            styling="grow h-full overflow-y-auto scroll pr-[10px]"
          >
            <p className="font-black text-[16px] font-[600] mt-5">Title</p>
            <InputField
              tag="input"
              type="text"
              name="title"
              placeholder="Enter a title"
              styling="my-2"
              inputStyle="placeholder:text-black6 py-3 pl-3 pr-3 "
            />
            <p className="text-gray-400 text-sm">
              The title must contain a maximum of 32 characters
            </p>

            <p className="font-black text-[16px] font-[600] mt-5">Details</p>
            <InputField
              tag="textarea"
              name="description"
              placeholder="Enter task details"
              styling="mt-2 mb-6"
              inputStyle="placeholder:text-black6 py-3 pl-3 pr-3"
            />
            {/* start mentors */}
            <div className="flex md:flex-row flex-col">
              <div className="basis-1/1 md:basis-1/2 bg-pri11 mb-2 mr-4 flex flex-col md:flex-row items-center rounded ">
                <div className="flex flex-col grow justify-center items-center grow">
                  <p className="font-black text-[16px] font-[600] mt-5 mb-2 mx-1">
                    Add Mentor Manager
                  </p>
                  {/* start select mentor */}
                  <div
                    className="flex flex-row bg-white px-3 py-.5 mb-2"
                    onClick={() => removeMentorsManagers()}
                    onKeyDown={() => removeMentorsManagers()}
                    role="button"
                    tabIndex={0}
                  >
                    <p className="mr-3">{`${selectedMentorsManagers.length} Selected` }</p>
                    <RemoveIcon
                      styling="ml-2 object-contain cursor-pointer"
                    />
                  </div>
                  {/* end select mentor */}
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <button
                    type="button"
                    onClick={() => { setmentorsmanagersOpen(true); setMentorsOpen(false); }}
                    onKeyDown={() => { setmentorsmanagersOpen(true); setMentorsOpen(false); }}
                    className="bg-pri3 py-1 mb-2 px-4 rounded-md text-white mr-1 font-light font-sm   max-md:self-center self-start lg:text-base text-sm"
                  >
                    Select
                  </button>
                </div>
              </div>

              <div className="basis-1/1 md:basis-1/2 bg-pri11 mr-4 flex flex-col md:flex-row items-center rounded ">
                <div className="flex flex-col grow justify-center items-center grow">
                  <p className="font-black text-[16px] font-[600] mt-5 mb-2 mx-1 ">
                    Add Mentor
                  </p>
                  {/* start select mentor */}
                  <div
                    className="flex flex-row bg-white px-3 py-.5 mb-2"
                    onClick={() => removeMentors()}
                    onKeyDown={() => removeMentors()}
                    role="button"
                    tabIndex={0}
                  >
                    <p className="mr-3">
                      {' '}
                      { `${selectedMentors.length} Selected` }
                    </p>
                    <RemoveIcon styling="pl-3 object-contain cursor-pointer" />
                  </div>
                  {/* end select mentor */}
                </div>
                <div className="flex flex-col  justify-center items-center">
                  <button
                    type="button"
                    onClick={() => { setmentorsmanagersOpen(false); setMentorsOpen(true); }}
                    onKeyDown={() => { setmentorsmanagersOpen(false); setMentorsOpen(true); }}
                    className="bg-pri3 py-1 mb-2 px-4 rounded-md text-white mr-1 font-light font-sm   max-md:self-center self-start lg:text-base text-sm"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
            {/* end mentors */}
            <section className="flex items-center justify-between mt-[30px]">
              <button
                type="submit"
                className="bg-pri3 py-2.5 px-10 rounded-md text-white font-semibold"
              >
                {isLoading ? (
                  <SpinnerCircular
                    color="#F7FEFF"
                    className="mr-2"
                    thickness={250}
                    size={20}
                  />
                ) : (
                  'Create Task'
                )}
              </button>
            </section>
          </FormikForm>
          {/* start mentors */}
          <div
            className={`${
              mentorsOpen ? '' : 'hidden'
            } h-full w-[62%] overflow-y-auto scroll pr-[10px]`}
          >
            <div className="tasksHeader flex flex-row justify-end">
              {checked ? (
                <div className="flex flex-row-reverse">
                  <input
                    type="text"
                    className="focus:outline-none bg-transparent pl-4 w-full"
                    placeholder="Search Mentors"
                    onChange={(e) => handleChange(e)}
                    value={searchText}
                  />
                  <BiArrowBack
                    className="text-teal-700 text-2xl mx-2 cursor-pointer"
                    onClick={() => setChecked(false)}
                  />
                </div>
              ) : (
                <>
                  <RiSearchLine
                    className="text-teal-700 text-xl mx-2 cursor-pointer"
                    onClick={search}
                  />
                  <BsFilter
                    className={`text-teal-700 text-2xl mx-2 cursor-pointer ${
                      sort ? 'rotate-180' : ''
                    }`}
                    onClick={() => setSort(!sort)}
                  />

                  <AiOutlineClose
                    className={`text-teal-700 text-md mt-1 mx-2 cursor-pointer ${
                      sort ? 'rotate-180' : ''
                    }`}
                    onClick={() => { setMentorsOpen(false); setmentorsmanagersOpen(false); }}
                  />
                </>
              )}
            </div>
            <div className="taskContainer">
              {allMentors.length > 0
                ? (allMentors.filter((x) => x.about.toLowerCase()
                .includes(searchText.toLowerCase()))
                .map((item, i) => (
                  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                  <div
                    className="task flex m-3 p-3 rounded-md items-center border-2
              border-grey-400 cursor-pointer flex-row max-lg:flex-col
               max-lg:justify-self-start max-lg:justify-items-start"
                    key={item.id}
                  >
                    <UserAvatar className="max-lg:mb-0 mb-2" />

                    <div className="rightTask ms-8 grow max-lg:w-full max-lg:mb-3">
                      <h3 className="font-semibold">Alison Davis</h3>
                      <div className="taskdate flex">
                        <p className="text-xs text-gray-600 font-light align-middle">
                          {item.about}
                        </p>
                      </div>
                      {item.roles.map((role, n) => (
                        <span className="bg-pri11 text-grey-300 text-xs mt-5 p-1 mx-1" key={`role${n}`}>
                          role
                        </span>
                      ))}
                    </div>
                    {selectedMentors.includes(item.id) ? (
                      <AiOutlineCheck
                        className="text-teal-700 text-2xl mx-2 cursor-pointer"
                      />
                    ) : <BsPlusCircle
                      className="text-teal-700 text-2xl mx-2 cursor-pointer"
                      onClick={() => pushMentors(item.id)}
                      onKeyDown={() => pushMentors(item.id)}
                      role="button"
                      tabIndex={0}
                    /> }

                  </div>
                ))) : <TaskLoading />}
            </div>
            {/* end tasks */}
          </div>

          {/* start mentors managers */}
          <div
            className={`${
              mentorsmanagersOpen ? '' : 'hidden'
            } h-full w-[62%] overflow-y-auto scroll pr-[10px]`}
          >
            <div className="tasksHeader flex flex-row justify-end">
              {checked ? (
                <div className="flex flex-row-reverse">
                  <input
                    type="text"
                    className="focus:outline-none bg-transparent pl-4 w-full"
                    placeholder="Search Mentors"
                    onChange={(e) => handleChange(e)}
                    value={searchText}
                  />
                  <BiArrowBack
                    className="text-teal-700 text-2xl mx-2 cursor-pointer"
                    onClick={() => setChecked(false)}
                  />
                </div>
              ) : (
                <>
                  <RiSearchLine
                    className="text-teal-700 text-xl mx-2 cursor-pointer"
                    onClick={search}
                  />
                  <BsFilter
                    className={`text-teal-700 text-2xl mx-2 cursor-pointer ${
                      sort ? 'rotate-180' : ''
                    }`}
                    onClick={() => setSort(!sort)}
                  />

                  <AiOutlineClose
                    className={`text-teal-700 text-md mt-1 mx-2 cursor-pointer ${
                      sort ? 'rotate-180' : ''
                    }`}
                    onClick={() => { setMentorsOpen(false); setmentorsmanagersOpen(false); }}
                  />
                </>
              )}
            </div>
            <div className="taskContainer">
              {allMentorsManagers.length > 0
                ? (allMentorsManagers.filter((x) => x.about.toLowerCase()
                .includes(searchText.toLowerCase()))
                .map((item, i) => (
                  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                  <div
                    className="task flex m-3 p-3 rounded-md items-center border-2
              border-grey-400 cursor-pointer flex-row max-lg:flex-col
               max-lg:justify-self-start max-lg:justify-items-start"
                    key={item.id}
                  >
                    <UserAvatar className="max-lg:mb-0 mb-2" />

                    <div className="rightTask ms-8 grow max-lg:w-full max-lg:mb-3">
                      <h3 className="font-semibold">Alison Davis</h3>
                      <div className="taskdate flex">
                        <p className="text-xs text-gray-600 font-light align-middle">
                          {item.about}
                        </p>
                      </div>
                      {item.roles.map((role, n) => (
                        <span className="bg-pri11 text-grey-300 text-xs mt-5 p-1 mx-1" key={item.id}>
                          role
                        </span>
                      ))}
                    </div>
                    {selectedMentorsManagers.includes(item.id) ? (
                      <AiOutlineCheck
                        className="text-teal-700 text-2xl mx-2 cursor-pointer"
                      />
                    ) : <BsPlusCircle
                      className="text-teal-700 text-2xl mx-2 cursor-pointer"
                      onClick={() => pushMentorsManagers(item.id)}
                      onKeyDown={() => pushMentorsManagers(item.id)}
                      role="button"
                      tabIndex={0}
                    /> }

                  </div>
                ))) : <TaskLoading />}
            </div>
            {/* end mentor managers */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTask;

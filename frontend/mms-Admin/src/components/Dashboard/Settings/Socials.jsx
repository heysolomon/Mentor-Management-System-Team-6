/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { ErrorMessage, useField } from 'formik';
import React from 'react';

function SocialIcon({ icon, text, placeHolder, ...props }) {
  const [field] = useField(props);
  return (
    <>
      <div className="border-[1px] border-black9 h-[40px] grid grid-cols-socials rounded-[5px]">
        <div className="h-full flex items-center px-2 border-r-[1px] border-r-black9">
          {React.cloneElement(icon, {
            styling: 'mr-2 w-[15px]',
          })}

          <p className="font-[400] text-black3 text-[12px] md:text-[16px]">
            {text}
          </p>
        </div>
        <input
          type="text"
          {...field}
          name={field.name}
          className="h-full w-full focus:outline-none bg-transparent border-0 pl-2 text-[12px] md:text-[16px] placeholder:text-black6 font-[400]"
          placeholder={placeHolder}
        />
      </div>
      <ErrorMessage
        className="text-sec2 text-xs mt-0"
        component="div"
        name={field.name}
      />
    </>
  );
}

export default SocialIcon;

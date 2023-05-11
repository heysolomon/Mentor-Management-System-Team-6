import React from 'react';
import Toggle from '../../../components/utilities/Toggle';

export default function Privacy() {
  return (
    <div className="faqs border-[1px] rounded-[5px] border-black9 mx-10 p-5">
      <div className="flex items-center justify-between w-[40%] mb-5">
        <h3 className="text-black2 font-semibold">Show contact info</h3>
        <Toggle enabled={false} />
      </div>

      <div className="flex items-center justify-between w-[40%] mb-5">
        <h3 className="text-black2 font-semibold">Show GitHub</h3>
        <Toggle enabled />
      </div>

      <div className="flex items-center justify-between w-[40%] mb-5">
        <h3 className="text-black2 font-semibold">Show Instagram</h3>
        <Toggle enabled={false} />
      </div>

      <div className="flex items-center justify-between w-[40%] mb-5">
        <h3 className="text-black2 font-semibold">Show Linkedin</h3>
        <Toggle enabled />
      </div>

      <div className="flex items-center justify-between w-[40%] mb-5">
        <h3 className="text-black2 font-semibold">Show Twitter</h3>
        <Toggle enabled={false} />
      </div>

      <div className="flex flex-row-reverse">
        <button
          className="bg-pri3 lg:py-2.5 lg:px-10 px-5 rounded-md text-white font-semibold mb-3 lg:text-base text-xs"
          type="button"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

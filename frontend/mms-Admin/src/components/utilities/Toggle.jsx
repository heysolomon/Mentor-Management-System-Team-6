/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch } from '@headlessui/react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

export default function Toggle(props) {
  const [enabled, setEnabled] = useState(props.enabled);
  const toggeled = () => {
    setEnabled(!enabled);
  };

  return (
    <Switch
      checked={enabled}
      onChange={toggeled}
      defaultChecked={false}
      className={`${enabled ? 'bg-teal-700' : 'bg-black7'}
          relative inline-flex h-[26px] w-[41.5px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      {enabled
        ? (
          <AiOutlineCheck
            aria-hidden="true"
            className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none text-xs text-teal-700 inline-block p-1.5 h-[23px] w-[23px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        ) : (
          <AiOutlineClose
            aria-hidden="true"
            className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
          pointer-events-none text-red-600 inline-block p-1.5 h-[23px] w-[23px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        )}
    </Switch>
  );
}

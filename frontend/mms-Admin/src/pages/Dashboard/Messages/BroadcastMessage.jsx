import React from 'react';
import { Link } from 'react-router-dom';
import emoji from '../../../assets/messages/emoji-smiley.svg';
import dropdownImg from '../../../assets/messages/dropdown.png';
import attachmentClip from '../../../assets/messages/attachment-clip.svg';
import messageDeliveredImg from '../../../assets/messages/message-delivered.svg';

export default function BroadcastMessage() {
  return (
    <div className="pb-[100px]">
      <section className="flex items-center justify-between w-full">
        <h1 className="text-black1 text-2xl font-semibold">
          Broadcast Message
        </h1>

        <Link to="/admin-dashboard/messages">
          <button
            type="button"
            className="bg-pri3 py-2.5 px-10 text-white rounded-xl font-semibold"
          >
            Close
          </button>
        </Link>
      </section>

      <section className="flex justify-between items-center border-2 border-solid rounded-xl my-5 py-3 px-[33px]">
        <h4 className="font-normal text-black5 text-lg">Select recepient</h4>
        <img
          src={dropdownImg}
          alt="img"
          className="h-[24px] cursor-pointer"
        />
      </section>

      <section className="border border-solid border-pri10 bg-pri11 rounded-[20px] px-[56px] py-[33px]">
        <div className="mb-4">
          <p className="text-xs font-semibold text-black5 text-center mb-2">
            09-01-23
          </p>

          <div className="bg-pri10 rounded-[10px] p-[24px]">
            <h5 className="font-normal text-black3 text-xl mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              dignissim pharetra metus, ut cursus purus efficitur et. Duis ac
              enim tellus. Phasellus eget tortor dapibus, laoreet mauris sed,
              dignissim lectus.
            </h5>
            <div className="flex items-center justify-between">
              <h6 className="text-xs font-bold text-black1">Mentor Managers</h6>

              <div className="flex">
                <p className="text-xs font-semibold text-black3 mr-3">
                  6:01 PM
                </p>
                <img
                  src={messageDeliveredImg}
                  alt="img"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-black5 text-center mb-2">
            09-01-23
          </p>

          <div className="bg-pri10 rounded-[10px] p-[24px]">
            <h5 className="font-normal text-black3 text-xl mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              dignissim pharetra metus, ut cursus purus efficitur et. Duis ac
              enim tellus. Phasellus eget tortor dapibus, laoreet mauris sed,
              dignissim lectus.
            </h5>
            <div className="flex items-center justify-between">
              <h6 className="text-xs font-bold text-black1">
                Peculiar and 12 others
              </h6>

              <div className="flex">
                <p className="text-xs font-semibold text-black3 mr-3">
                  6:01 PM
                </p>
                <img
                  src={messageDeliveredImg}
                  alt="img"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-black5 text-center mb-2">
            12-01-23
          </p>

          <div className="bg-pri10 rounded-[10px] p-[24px]">
            <h5 className="font-normal text-black3 text-xl mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              dignissim pharetra metus, ut cursus purus efficitur et. Duis ac
              enim tellus. Phasellus eget tortor dapibus, laoreet mauris sed,
              dignissim lectus.
            </h5>
            <div className="flex items-center justify-between">
              <h6 className="text-xs font-bold text-black1">Mentor Managers</h6>

              <div className="flex">
                <p className="text-xs font-semibold text-black3 mr-3">
                  6:01 PM
                </p>
                <img
                  src={messageDeliveredImg}
                  alt="img"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-black5 text-center mb-2">
            09-01-23
          </p>

          <div className="bg-pri10 rounded-[10px] p-[24px]">
            <h5 className="font-normal text-black3 text-xl mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              dignissim pharetra metus, ut cursus purus efficitur et. Duis ac
              enim tellus. Phasellus eget tortor dapibus, laoreet mauris sed,
              dignissim lectus.
            </h5>
            <div className="flex items-center justify-between">
              <h6 className="text-xs font-bold text-black1">
                Peculiar and 12 others
              </h6>

              <div className="flex">
                <p className="text-xs font-semibold text-black3 mr-3">
                  6:01 PM
                </p>
                <img
                  src={messageDeliveredImg}
                  alt="img"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-black5 text-center mb-2">
            09-01-23
          </p>

          <div className="bg-pri10 rounded-[10px] p-[24px]">
            <h5 className="font-normal text-black3 text-xl mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              dignissim pharetra metus, ut cursus purus efficitur et. Duis ac
              enim tellus. Phasellus eget tortor dapibus, laoreet mauris sed,
              dignissim lectus.
            </h5>
            <div className="flex items-center justify-between">
              <h6 className="text-xs font-bold text-black1">Mentor Managers</h6>

              <div className="flex">
                <p className="text-xs font-semibold text-black3 mr-3">
                  6:01 PM
                </p>
                <img
                  src={messageDeliveredImg}
                  alt="img"
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center mt-6 w-full">
        <img
          src={emoji}
          alt="emoji"
          className="cursor-pointer"
        />
        <img
          src={attachmentClip}
          alt="attachment"
          className="cursor-pointer px-4"
        />
        <div className="bg-pri10 rounded-[10px] py-[10px] px-5 w-full">
          <input
            type="text"
            name="message"
            placeholder="Type a message..."
            className="w-full bg-pri10 border-l-2 px-[12px] py-[8px] focus:outline-none focus:border-pri10 focus:ring-pri10 focus:ring-1 placeholder:text-black5 placeholder:font-normal placeholder:text-base"
          />
        </div>
      </section>
    </div>
  );
}

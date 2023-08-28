import { Data } from "../type/profile";

import contactlogo from "../icon/address.svg";
import addresslogo from "../icon/address.svg";
import emaillogo from "../icon/email.svg";
import whatsapplogo from "../icon/whatsapplogo.svg";

const Theme03 = ({
  id,
  profile_pic,
  business_name,
  business_details,
  images,
  email,
  contact,
  business_address,
  whatsapp,
  name,
}: Data) => {
  return (
    <div className="relative w-full  min-h-screen flex flex-col justify-center items-center">
      <div className="pt-6 px-4 flex w-full justify-center">
        <div className="flex flex-col justify-center ">
          <h1 className="mb-1 font-bold text-xl">{business_name}</h1>
          <div className="w-40 bg-black h-[0.5px]"></div>
          <h1 className="mt-1 mb-1 font-medium text-xl">{name}</h1>
        </div>

        <img
          className="w-32 h-32 object-contain  rounded-full"
          src={`https://k80o05lshj.execute-api.ap-south-1.amazonaws.com/api/files/profile/${id}/${profile_pic}?thumb50x50`}
          alt=""
        />
      </div>

      <p className=" p-5   w-full max-w-lg text-xs md:text-sm font-semibold  text-gray-800 text-center">
        {business_details}
      </p>

      <div className="flex  items-center  justify-center flex-wrap gap-3 p-2 sm:my-4 ">
        {images.map((e, i) => (
          <div key={i}>
            <img
              className="h-28 w-28 sm:h-44 sm:w-44 object-scale-downn rounded-xl"
              src={`https://k80o05lshj.execute-api.ap-south-1.amazonaws.com/api/files/profile/${id}/${e}?thumb50x50`}
            ></img>
          </div>
        ))}
      </div>
      <div className="bg-indigo-100  w-full flex justify-center">
        <div className="grid grid-cols-2 gap-4 w-full  sm:w-fit max-w-lg p-5 mb-8 ">
          <div className="w-full  sm:w-fit">
            <h1 className="font-semibold text-lg my-2">Contact Info</h1>
            <div className="flex items-center w-full my-1">
              <img src={contactlogo} className="w-5 h-5 mr-4" alt="" />
              <h1 className="text-xs sm:text-sm">{"+91 " + contact}</h1>
            </div>
            <div className="flex items-center w-full my-1">
              <img src={whatsapplogo} className="w-5 h-5 mr-4" alt="" />
              <h1 className="text-xs sm:text-sm">{"+91 " + whatsapp}</h1>
            </div>
            <div className="flex items-center w-full my-1">
              <img src={emaillogo} className="w-5 h-5 mr-4" alt="" />
              <h1 className="text-xs sm:text-sm">{email}</h1>
            </div>
          </div>
          <div className="w-full  sm:w-fit">
            <div className="flex items-center  w-full">
              <img src={addresslogo} className="w-5 h-5 mr-4" alt="" />
              <h1 className="font-semibold text-lg mt-4 sm:mt-2 mb-2">
                Address
              </h1>
            </div>
            <h1 className="text-xs sm:text-sm">{business_address}</h1>
          </div>
        </div>
      </div>
      <div className="sm:text-center text-xs w-full absolute bottom-0 bg-gray-200 p-4">
        Created by ITRA ROBO. Copyright © 2023 ITRA ROBO. All rights reserved.
      </div>
    </div>
  );
};

export default Theme03;

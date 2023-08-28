/* eslint-disable @typescript-eslint/no-unused-vars */
import { Data } from "../type/profile";

import contactlogo from "../icon/contact.svg";

import emaillogo from "../icon/email.svg";
import whatsapplogo from "../icon/whatsapplogo.svg";

const Theme02 = ({
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
    <div className="relative w-full h-screen  flex flex-col justify-start items-center">
      <h1 className="mb-4 mt-6 font-bold text-3xl">{business_name}</h1>
      <div className="flex justify-around item-center w-full max-w-lg p-2">
        <img
          className="w-32 h-32 object-contain m-2 rounded-full"
          src={`https://k80o05lshj.execute-api.ap-south-1.amazonaws.com/api/files/profile/${id}/${profile_pic}?thumb50x50`}
          alt=""
        />

        <div className="flex text-justify flex-col pt-2 pl-4 ">
          <h1 className="mb-2 font-medium text-xl">{name}</h1>

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
      </div>
      <div className="flex flex-col item-center justify-center my-4  text-center w-full ">
        <h1 className="font-semibold text-lg mt-2  mb-2">Address</h1>
        <h1 className="text-xs sm:text-sm">{business_address}</h1>
      </div>
      <p className="my-4 px-5 sm:px-0  w-full max-w-lg text-xs md:text-sm font-semibold  text-gray-800 text-center">
        {business_details}
      </p>

      <div className="flex items-center  justify-center flex-wrap gap-3 p-2 my-4 ">
        {images.map((e, i) => (
          <div key={i}>
            <img
              className="h-32 w-32 sm:h-44 sm:w-44 object-scale-downn rounded-xl"
              src={`https://k80o05lshj.execute-api.ap-south-1.amazonaws.com/api/files/profile/${id}/${e}?thumb50x50`}
            ></img>
          </div>
        ))}
      </div>
      <div className="sm:text-center text-xs w-full absolute bottom-0 bg-gray-200 p-4">
        Created by ITRA ROBO. Copyright © 2023 ITRA ROBO. All rights reserved.
      </div>
    </div>
  );
};

export default Theme02;

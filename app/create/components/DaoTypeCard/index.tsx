import React from "react";
import Image from "next/image";
import image from "@/public/image.png";

function DaoTypeCard() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="bg-slate-900 p-8 rounded-lg flex flex-col gap-8 text-gray-500">
        <div>
          <input type="checkbox" />
        </div>
        <div className="flex w-full justify-center py-4 pb-4">
          <Image src={image} width={100} height={100} alt="profile-pic" />
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="">
            <p className="font-light">Supplies</p>
            <p className="font-light text-gray-100">None</p>
          </div>

          <div className="text-end">
            <p className="font-light">Membership</p>
            <p className="font-light text-gray-100">By invitation</p>
          </div>
        </div>

        <div className="flex flex-col w-full gap-3 ">
          <p className="text-lg font-semibold text-gray-100">
            Membership DAO (Multisig)
          </p>

          <p className=" text-gray-100">
            Small organization with a few members who are likely to stick
            around. Members can be added and removed by a vote of existing
            members.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DaoTypeCard;

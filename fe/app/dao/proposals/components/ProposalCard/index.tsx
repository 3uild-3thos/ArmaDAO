import React from "react";

function ProposalCard() {
  return (
    <div className="flex items-center justify-between w-full bg-slate-800 rounded-lg  p-3 ">
      <div className="flex items-center gap-5">
        <p className="text-gray-500 text-sm">A-00014</p>
        <p className="text-gray-500 text-sm">Closed</p>
        <p className=" text-sm font-semibold">
          End Remaining $JUNO $DAO Token Swap Vesting
        </p>
      </div>
      <p className="text-gray-500 text-sm">January 19</p>
    </div>
  );
}

export default ProposalCard;

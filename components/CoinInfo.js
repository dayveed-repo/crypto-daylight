import millify from "millify";
import React from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

function CoinInfo({ name, value, id }) {
  if (name === "Rank")
    return (
      <div className="flex items-center justify-between pb-2 border-b border-gray-600 space-x-5">
        <p className="coinInfoKey">{name}</p>
        <h4 className="coinInfoVal">{value}</h4>
      </div>
    );

  if (id === 2)
    return (
      <div className="flex items-center justify-between pb-2 border-b border-gray-600 space-x-5">
        <p className="coinInfoKey">{name}</p>
        {name !== "Approved Supply" ? (
          <h4 className="coinInfoVal">{millify(value)}</h4>
        ) : (
          <>
            {value === "true" ? (
              <AiOutlineCheck className="text-green-500" />
            ) : (
              <AiOutlineClose className="text-red-400" />
            )}
          </>
        )}
      </div>
    );

  return (
    <div className="flex items-center justify-between pb-2 border-b border-gray-600 space-x-5">
      <p className="coinInfoKey">{name}</p>

      {Number(value) >= 10000 ? (
        <h4 className="coinInfoVal">$ {millify(value)}</h4>
      ) : (
        <h4 className="coinInfoVal">$ {Number(value).toFixed(2)}</h4>
      )}
    </div>
  );
}

export default CoinInfo;

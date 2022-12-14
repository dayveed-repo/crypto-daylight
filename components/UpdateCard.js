import moment from "moment";
import { useRouter } from "next/router";
import React from "react";

const UpdateCard = ({ id, name, imgUrl, desc, linkUrl, datePublished }) => {
  const router = useRouter();

  if (router.asPath === "/")
    return (
      <div className="w-full h-full cursor-pointer flex flex-col md:flex-row md:items-center">
        <img
          src={imgUrl}
          alt="news image"
          className="w-full md:w-52 h-48 md:h-full rounded-sm md:mr-2 object-cover hover:ease-out hover:duration-150 hover:scale-105 transition-all"
        />

        <div className="space-y-2 flex flex-col mt-4 md:mt-0">
          <p className={`text-slate-400 text-sm font-bold`}>{name}</p>

          <h4 className="text-xs text-slate-500">
            {desc.slice(0, 50) + "..."}
          </h4>

          <a
            href={linkUrl}
            target="_blank"
            className="text-[10px] w-max bg-cyan-800 text-white rounded-md px-2 py-1"
          >
            Read More
          </a>
        </div>
      </div>
    );

  return (
    <div className="w-full h-full cursor-pointer space-y-3">
      <img
        src={!imgUrl ? "/cryptoThumbnail.jpg" : imgUrl}
        alt="news image"
        className="h-36 w-full object-cover"
      />

      <p className={`text-slate-400 text-sm font-bold`}>{name}</p>

      <h4 className="text-xs text-slate-500">{desc}</h4>

      <div className="flex items-center space-x-5">
        <a
          href={linkUrl}
          target="_blank"
          className="text-[10px] w-max bg-cyan-800 text-white rounded-md px-2 py-1"
        >
          Read More
        </a>

        <p className="text-xs text-gray-500">
          {moment(datePublished).fromNow()}
        </p>
      </div>
    </div>
  );
};

export default UpdateCard;

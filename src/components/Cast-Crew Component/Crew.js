import React from "react";

const Crew = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
          <img
            className="rounded-full w-full h-full"
            src={props.image}
            alt="crew"
          />
        </div>
        <h1 className="text-lg text-gray-800">{props.name}</h1>
        <h5 className="text-sm text-gray-500">{props.role}</h5>
      </div>
    </div>
  );
};

export default Crew;

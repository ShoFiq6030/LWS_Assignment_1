import React from "react";
import SearchBox from "./SearchBox";
import ClassOne from "./ClassOne";
import ClassTwo from "./ClassTwo";

const StudentsTable = () => {
  return (
    <div className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>
          <SearchBox />
          <ClassOne />
          <ClassTwo />
        </div>
      </div>
    </div>
  );
};

export default StudentsTable;

import React from "react";
import studentInfo from "./result";

const ClassOne = () => {
  let classOneInfo = studentInfo
    .filter((student) => student.Class === "One")
    .map((student) => (
      <tr key={student.ID} className="border-b border-[#7ECEB529]">
        <td className="p-5 text-sm md:text-xl">{student.ID}</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="flex space-x-3 items-center">
            <img
              className="w-8 h-8"
              src={student.Img}
              width={32}
              height={32}
              alt={student.Name}
            />
            <span className="whitespace-nowrap">{student.Name}</span>
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">{student.Scores}</td>
        <td className="p-5 text-sm md:text-xl text-center">
          {student.Percentage}
        </td>
      </tr>
    ));
  return (
    <div>
      <div className="max-w-[848px] mx-auto overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#FFFFFF0D]">
              <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                ID
              </th>
              <th className="p-5 text-sm md:text-xl font-semibold text-left">
                Name
              </th>
              <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
              <th className="p-5 text-sm md:text-xl font-semibold">
                Percentage
              </th>
            </tr>
          </thead>
          <tbody>
            {/* class One */}
            <tr className="bg-white/5">
              <td className="p-5 text-sm md:text-xl" colSpan={4}>
                Class One
              </td>
            </tr>
          {classOneInfo}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassOne;

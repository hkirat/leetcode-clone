import React from "react";

const dummyData = [
  {
    activity: "Lorem ipsum dolor sit amet.",
    startDate: "2024-01-01",
    endDate: "2024-01-10",
  },
  {
    activity: "Sed do eiusmod tempor incididunt.",
    startDate: "2024-01-11",
    endDate: "2024-01-20",
  },
  {
    activity: "Ut enim ad minim veniam.",
    startDate: "2024-01-21",
    endDate: "2024-01-30",
  },
];

export default function SubmissionActivity() {
  const renderData = (data: any, index: number) => (
    <div key={index} className="mb-4 flex justify-between">
      {Object.keys(data).map((key, i) => (
        <div key={i}>
          <p className="font-bold">{key.replace(/\d/g, "")}:</p>
          <p>{data[key]}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Submission Activity</h2>
      {dummyData.map((data, index) => (
        <React.Fragment key={index}>
          {renderData(data, index)}
          {index !== dummyData.length - 1 && <hr className="my-4" />}
        </React.Fragment>
      ))}
    </div>
  );
}

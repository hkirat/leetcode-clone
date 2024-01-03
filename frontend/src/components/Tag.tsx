import { child } from "firebase/database";
import React from "react";

export const Tag = ({ children }) => {
  return (
    <div className="bg-gray-800 text-white rounded-md px-2 py-1 cursor-pointer hover:bg-gray-500 ">
      {children}
    </div>
  );
};

export const TagContainer = (tags) => {
  console.log("TAGS", tags);
  return (
    <div className="flex gap-2">
      {tags.tags.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </div>
  );
};

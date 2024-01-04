
export const Tag = ({ children }: {children: any}) => {
  return (
    <div className="bg-gray-800 text-white rounded-md px-2 py-1 cursor-pointer hover:bg-gray-500 ">
      {children}
    </div>
  );
};

export const TagContainer = (tags: any) => {
  console.log("TAGS", tags);
  return (
    <div className="flex gap-2">
      {tags.tags.map((tag: any) => (
        <Tag>{tag}</Tag>
      ))}
    </div>
  );
};

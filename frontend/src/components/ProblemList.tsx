// see https://erdos.sdslabs.co/problems specifically the list of problems

const ProblemList = () => {
  const data = [
    {
      question: "Minimum Value",
      solverImg:
        "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png",
      topics: ["array", "hashmap"],
    },
    {
      question: "Equation",
      solverImg:
        "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png",
      topics: ["array", "hashmap"],
    },
    {
      question: "Largest Number",
      solverImg:
        "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png",
      topics: ["array", "hashmap"],
    },
    {
      question: "2 sum",
      solverImg:
        "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png",
      topics: ["array", "hashmap"],
    },
    {
      question: "3 Musketeers",
      solverImg:
        "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png",
      topics: ["array", "hashmap"],
    },
    {
      question: "Exponentiation",
      solverImg:
        "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png",
      topics: ["array", "hashmap"],
    },
  ];
  return (
    <div className=" shadow-lg my-4">
      <h1 className=" text-2xl my-2 ml-4">All Problems</h1>
      {data.map((item, index) => (
        <div className="flex my-4 text-lg bg-white shadow-sm py-4 px-2 border-b-2 ">
          <div className=" pr-2 text-slate-500">#{index + 1}</div>
          <div className=" ml-10 ">
            <div onClick={()=>{}} className="cursor-pointer">{item.question}</div>

            {item.topics.map((topic, topicIndex) => (
              <span onClick={()=>{}}
                key={topicIndex}
                className="cursor-pointer rounded py-1 bg-gray-600 text-white px-3 mr-1"
              >
                {topic}
              </span>
            ))}
          </div>

          <div className=" ml-80 flex flex-row p-2 text-sm gap-2 align-middle">
            <span>recently solved by</span>
            <img onClick={()=>{}} className="cursor-pointer h-8" src={item.solverImg} alt="Image of Solver" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProblemList;

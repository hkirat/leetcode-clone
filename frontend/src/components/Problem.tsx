import { useParams } from "react-router-dom";
import { TagContainer } from "./Tag";
import { CodeEditor } from "./CodeEditor";

interface ProblemType {
  id: string;
  problemName: string;
  tags: string[];
  description: string;
}

export const Problem = ({ problemList }: { problemList: ProblemType[] }) => {
  const { id } = useParams();

  // Find the selected problem by matching the id
  const selectedProblem = problemList.find((problem) => problem.id === id);

  if (!selectedProblem) {
    return <div>Error: Problem not found</div>;
  }

  return (
    <div className="my-8">
      {/* <h1 className="text-bold text-4xl my-8 text-bold">Problem Details</h1> */}
      {/* <div className="shadow-md bg-gray-50 px-4 py-4"> */}
        <div className="flex justify-between items-center mb-4 bg-white p-4 shadow-md rounded-md w-full">
          <div className="gap-16">
            <h3 className="text-[#ababab]">Problem #{selectedProblem.id}</h3>
            <div>
                <h2 className="text-lg mt-3">{selectedProblem.problemName}</h2>
                <p className="text-md mt-5">{selectedProblem.description}</p>
            </div>
            <div className="mt-5">
              <TagContainer  tags={selectedProblem.tags} />
            </div>
            <h6 className="text-[#ababab] text-sm mt-3">Contributed by Baibhav</h6>
          </div>

          {/* Code Mirror */}
        </div>
          <CodeEditor />
        {/* Additional details or description of the problem can be added here */}
      </div>
    // </div>
  );
};


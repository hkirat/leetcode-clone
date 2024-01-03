import React, { useState } from 'react';

interface Submission {
    Name: string;
    username: string;
    position: number;
    time: string;
    answerIsCorrect: boolean;
}


// Example Object : 
// const submissions = [
//     { Name: 'John', position: 1, time: '10:00', answerIsCorrect: true },
//     // Add more submissions as needed
// ];

interface SubmissionActivityListProps {
    submissions: Submission[];
}

export const SubmissionActivityList: React.FC<SubmissionActivityListProps> = ({ submissions }) => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;

    const visibleSubmissions = submissions.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
    const nextPageStartIndex = startIndex + itemsPerPage;
    if (nextPageStartIndex < submissions.length) {
        setStartIndex(nextPageStartIndex);
    }
};


const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
};


    return (
        <div className="p-0 w-full">
            <h1 className="">Submissions</h1>
            <div className="mt-6">
                {visibleSubmissions.map((submission, index) => (
                    <List key={index} {...submission} />
                ))}
            </div>
            <div className="flex justify-between mt-4">
                <button className="bg-gray-300 px-4 py-2 rounded-md" onClick={handlePrev}>
                    Previous
                </button>
                <button className="bg-gray-300 px-4 py-2 rounded-md" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
};

interface ListProps {
    Name: string;
    username: string;
    position: number;
    time: string;
    answerIsCorrect: boolean;
}

function List({ Name, position, time, answerIsCorrect, username }: ListProps) {
    return (
        <div className="w-full overflow-x-auto">
            <div className="w-full bg-white font-light border-b hover:bg-gray-50 text-black flex items-center">
                <div className="flex-1 px-6 py-4">
                    {Name} ({username})
                </div>
                <div className="cursor-pointer flex-3 px-6 py-4 text-gray-500 hover:text-black hover:font-normal">
                    #{position}
                </div>
                <div className="flex-3 mx-6 px-6 py-4">{time}</div>
                <div className="flex-3 px-6 py-4 flex items-center">
                    {answerIsCorrect ? <h1>Correct</h1> : <h1>False</h1>}
                </div>
            </div>
        </div>
    );
}

export default List;

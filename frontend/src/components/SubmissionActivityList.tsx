
import { Suspense, useState } from "react"
import { useRecoilValue } from "recoil"
import { Submission, globalSubmissions } from "../store/atoms/submissions"
import { Card } from "./Card"

// see left side of https://erdos.sdslabs.co/activity
export const SubmissionActivityList = () => {
    return <Suspense fallback={"loading..."}>
        <_SubmissionActivityList />
    </Suspense>
}

const _SubmissionActivityList = () => {
    const submissions = useRecoilValue(globalSubmissions);
    return <Card>
        <SubmissionActivityListComponent submissions={submissions} />
    </Card>
}

interface SubmissionActivityListProps {
    submissions: Submission[];
}

export const SubmissionActivityListComponent: React.FC<SubmissionActivityListProps> = ({ submissions }) => {
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
    username: string;
    problemId: string;
    timestamp: string;
    status: string;
}

function List({ problemId, timestamp, status, username }: ListProps) {
    return (
        <div className="w-full overflow-x-auto">
            <div className="w-full bg-white font-light border-b hover:bg-gray-50 text-black flex items-center cursor-pointer">
                <div className="flex-1 px-6 py-4">
                    {username}
                </div>
                <div className="cursor-pointer flex-3 px-6 py-4 text-gray-500 hover:text-black hover:font-normal">
                    #{problemId}
                </div>
                <div className="flex-3 mx-6 px-6 py-4">{timestamp}</div>
                <div className="flex-3 px-6 py-4 flex items-center">
                    {status === "AC" ? <img style={{height: 25}} src={"/check.png"} /> : <img style={{height: 25}} src="/cross.webp" />}
                </div>
            </div>
        </div>
    );
}
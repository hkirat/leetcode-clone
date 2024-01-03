import { useState } from 'react';

// Sample default profile picture URL from assets folder
const defaultProfilePic = 'https://i.ibb.co/FXMRP8N/Screenshot-2024-01-03-at-10-36-11-PM-removebg-preview.png';

export const ProblemList = () => {
  const [allProblems, setAllProblems] = useState([
    { 
      id: 1,
      problem: '1. Minimum Value (Number Theory)',
      concept: 'Number Theory',
      rank: 'Easy',
      recentlySolvedBy: [
        { name: 'Shashank Shekhar', profilePic: defaultProfilePic },
        // Add more recently solved by for this problem as needed
      ]
    },
    { 
      id: 2,
      problem: '2. Reverse Integer (Graph Theory)',
      concept: 'Graph Theory',
      rank: 'Hard',
      recentlySolvedBy: [
        { name: 'Jane Smith', profilePic: defaultProfilePic },
        // Add more recently solved by for this problem as needed
      ]
    },
    { 
      id: 3,
      problem: '3. Add Two Number (Graph Theory)',
      concept: 'Graph Theory',
      rank: 'Medium',
      recentlySolvedBy: [
        { name: 'John Doe', profilePic: defaultProfilePic },
        // Add more recently solved by for this problem as needed
      ]
    },
    { 
      id: 4,
      problem: '4. Binary Search (DSA)',
      concept: 'Data Structures and Algorithms',
      rank: 'Medium',
      recentlySolvedBy: [
        { name: 'Iron Man', profilePic: defaultProfilePic },
        // Add more recently solved by for this problem as needed
      ]
    },
    { 
      id: 5,
      problem: '5. Merge Sort (DSA)',
      concept: 'Data Structures and Algorithms',
      rank: 'Hard',
      recentlySolvedBy: [
        { name: 'Bruce Wayne', profilePic: defaultProfilePic },
        // Add more recently solved by for this problem as needed
      ]
    },
    { 
      id: 6,
      problem: '6. Longest Common Subsequence (Dynamic Programming)',
      concept: 'Dynamic Programming',
      rank: 'Medium',
      recentlySolvedBy: [
        { name: 'Alice', profilePic: defaultProfilePic },
        // Add more recently solved by for this problem as needed
      ]
    },
    { 
      id: 7,
      problem: '7. Depth First Search (Graph Theory)',
      concept: 'Graph Theory',
      rank: 'Medium',
      recentlySolvedBy: [
        { name: 'Charlie', profilePic: defaultProfilePic },
        // Add more recently solved by for this problem as needed
      ]
    },
    { 
      id: 8,
      problem: '8. Linked List Cycle (Linked List)',
      concept: 'Linked List',
      rank: 'Easy',
      recentlySolvedBy: [
        { name: 'Eva', profilePic: defaultProfilePic },
        // Add more recently solved by for this problem as needed
      ]
    },
    { 
      id: 9,
      problem: '9. Tower of Hanoi (Recursion)',
      concept: 'Recursion',
      rank: 'Hard',
      recentlySolvedBy: [
        { name: 'Frank', profilePic: defaultProfilePic },
        // Add more recently solved by for this problem as needed
      ]
    },
    { 
      id: 10,
      problem: '10. Breadth First Search (Graph Theory)',
      concept: 'Graph Theory',
      rank: 'Easy',
      recentlySolvedBy: [
        { name: 'Gina', profilePic: defaultProfilePic },
        // Add more recently solved by for this problem as needed
      ]
    },
    // Add more problems with concepts and recently solved by as needed
  ]);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Problem List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">S.No.</th>
              <th className="py-3 px-6 text-left">Problem Name</th>
              <th className="py-3 px-6 text-left">Rank</th>
              <th className="py-3 px-6 text-left">Recently Solved By</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {allProblems.map((problem, index) => (
              <tr key={problem.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{`#${index + 1}`}</td>
                <td className="py-3 px-6 text-left">
                  {problem.problem}
                  <span className="bg-gray-400 rounded-full py-1 px-3 text-white text-xs ml-2">
                    #{problem.concept}
                  </span>
                </td>
                <td className="py-3 px-6 text-left">{problem.rank}</td>
                <td className="py-3 px-6 text-left">
                  {problem.recentlySolvedBy.map((solvedItem, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src={solvedItem.profilePic || defaultProfilePic}
                        alt={solvedItem.name}
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span>{solvedItem.name}</span>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

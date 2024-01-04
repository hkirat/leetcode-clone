import CodeEditor from './CodeEditor';
import MarkdownEditor from './MarkdownEditor';

const problem = {
  id: '1',
  name: 'Minimum Value',
  tags: ['number theory', 'mathematics'],
  description:
    'Let there be a set of N natural numbers 1,2,3,4...N. We are allowed to insert + or − sign in front of each number and add all the resultant numbers. The minimum non-­negative value obtained is denoted as D(N).Find the value of D(1)+D(2)+...+D(19216812112)',
  contributors: ['John Doe', 'Jane Doe'],
  solvedBy: 100,
};

const Problem = () => {
  return (
    <>
      <div className='my-8 shadow overflow-hidden rounded border-b border-gray-200 py-4 px-4'>
        <p className='text-gray-400 text-sm font-light'>
          Problem #{problem.id}
        </p>
        <p className='text-gray-800 text-xl'>{problem.name}</p>

        <div className='my-6'>
          <p className='text-gray-600 font-light'>{problem.description}</p>
        </div>

        <div className='flex gap-2 items-center'>
          {problem.tags.map((topic, idx) => (
            <div key={idx} className='bg-gray-200 rounded-full px-2 py-1'>
              <p className='text-gray-600 text-xs'>{topic}</p>
            </div>
          ))}
        </div>

        <div className='mt-6 flex items-center text-xs gap-1'>
          <p className='text-gray-400'>Contributed by: </p>
          <div className='flex gap-2 items-center'>
            <p className='font-light'>
              {problem.contributors.map((contributor, idx) => (
                <span key={idx}>
                  {`${contributor}${
                    idx === problem.contributors.length - 1 ? '' : ', '
                  }`}
                </span>
              ))}
            </p>
          </div>
        </div>
        <p className='font-light text-xs'>Solved by {problem.solvedBy} users</p>
      </div>
      <MarkdownEditor />
    </>
  );
};

export default Problem;

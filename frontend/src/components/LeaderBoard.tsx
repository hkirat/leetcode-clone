// see https://erdos.sdslabs.co/users

export const Leaderboard = ({
  leaderboard,
}: {
  leaderboard: { image: string; name: string; points: number; id: string }[];
}) => {
  return (
    <div className='my-8 shadow overflow-hidden rounded border-b border-gray-200'>
      <h1 className='text-bold text-4xl py-4 px-4'>Leaderboards</h1>
      <table className='my-4 mih-h-[50vh] min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-50'>
          <tr>
            <th className="w-1/4 px-6 py-4 text-md font-medium text-gray-500 uppercase">ID</th>
            <th className="w-1/2 px-6 py-4 text-md font-medium text-gray-500 uppercase">Name</th>
            <th className="w-1/4 px-6 py-4 text-md font-medium text-gray-500 uppercase">Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((item, idx) => (
            <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} py-4 px-2 text-center`}>
              <td className='w-1/4 px-6 py-4 whitespace-nowrap text-gray-500'>#{item.id}</td>
              <td className='w-1/2 px-6 py-4 whitespace-nowrap text-gray-500'>{item.name}</td>
              <td className='w-1/4 px-6 py-4 whitespace-nowrap text-gray-500'>{item.points}</td>
            </tr>
          ))}
        </tbody>
        {/* <div className='flex'></div> */}
      </table>
    </div>
  );
};

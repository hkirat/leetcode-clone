// see https://erdos.sdslabs.co/users

export const Leaderboard = ({
  leaderboard,
}: {
  leaderboard: { image: string; name: string; points: number; id: string }[];
}) => {
  return (
    <div className="my-8">
      <h1 className="text-bold text-4xl">Leaderboards</h1>
      <div className="shadow-md my-4 mih-h-[50vh] px-4 py-4">
        <div className="flex my-8">
          <div className="w-1/3">Id</div>
          <div className="w-1/3">Name</div>
          <div className="w-1/3">Points</div>
        </div>
        {leaderboard.map((item) => (
          <div className="flex my-4 text-lg bg-white shadow-sm py-4 px-2">
            <div className="w-1/3">{item.id}</div>
            <div className="w-1/3">{item.name}</div>
            <div className="w-1/3">{item.points}</div>
          </div>
        ))}
        <div className="flex"></div>
      </div>
    </div>
  );
};

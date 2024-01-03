// see https://erdos.sdslabs.co/users
function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

export const Leaderboard = ({
  leaderboard,
}: {
  leaderboard: { image: string; name: string; points: number }[];
}) => {
  return (
    <div className="max-w-[860px] p-4 mt-2 bg-white boxShadow">
      <div className="flex justify-between items-center mb-4">
        <div className="text-[1.2rem]">Leaderboard</div>
        <div className="bg-[#24AE60] text-white p-[6px] text-[0.8rem]">
          People you follow
        </div>
      </div>
      <div className="flex flex-col">
        {leaderboard.map((user, index) => {
          return (
            <div
              key={index}
              className="flex items-center h-[50px] mb-3  border-[#E4E4E4]"
            >
              <div className="flex items-center">
                <div className="font-semibold mr-6">{index + 1}</div>
                <div
                  style={{ backgroundColor: stringToColor(user.name) }}
                  className=" text-white rounded-full w-[30px] h-[30px] flex items-center justify-center text-[0.8rem]"
                >
                  {user.name[0].toUpperCase()}
                </div>
                <div className="ml-8 min-w-[250px] text-[#222222]">
                  {user.name}
                </div>
              </div>
              <div className="font-semibold w-3 flex justify-end items-center text-[#52525298]">
                {user.points}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

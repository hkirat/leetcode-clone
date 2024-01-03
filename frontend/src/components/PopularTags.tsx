import { Card } from "./Card";
import { useState, useEffect } from "react";

export const PopularTags = () => {
  const [tags, setTags] = useState < string[] > ([]);
  const [loading, setLoading] = useState(true);

  const fetchTags = async () => {
    try {
      // Simulating an API request with a 1-second delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mocked response from the server
      const mockTags = [
        "number theory",
        "dp",
        "geometry",
        "games",
        "modular",
        "endgame 9.0",
      ];

      setTags(mockTags);
    } catch (error) {
      console.error("Error fetching tags:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <Card>
      <div className="mb-2 text-xl">Popular Tags</div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="m-1 p-1 text-sm text-white bg-[#555] cursor-pointer hover:bg-black font-light"
            >
              {tag}
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-end items-end mt-2">
        <a href="/tags" className="text-xs text-slate-500 hover:underline focus:outline-none focus:underline">
          View All Tags
        </a>
      </div>
    </Card>
  );
};
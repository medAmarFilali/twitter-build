import Suggestion from "./Suggestion";

// Generate an array of suggestions
const SUGGESTIONS = [
  {
    id: 1,
    category: "Technology",
    tag: "React",
    tweets: "1.5k",
  },
  {
    id: 2,
    category: "Technology",
    tag: "NodeJS",
    tweets: "2.3k",
  },
  {
    id: 3,
    category: "Technology",
    tag: "NextJS",
    tweets: "1.2k",
  },
  {
    id: 4,
    category: "Health",
    tag: "Health",
    tweets: "10.23k",
  },
  {
    id: 5,
    category: "Sport",
    tag: "CR7",
    tweets: "1.2k",
  },
  {
    id: 6,
    category: "Sport",
    tag: "Messi",
    tweets: "1.2k",
  },
  {
    id: 7,
    category: "Games",
    tag: "eldenring",
    tweets: "1.2k",
  },
];

const Trends = () => {
  return (
    <div className="rounded-xl bg-zinc-900 w-full pt-2">
      <h3 className="text-xl font-bold px-4 mb-4">Trending for you</h3>
      <div>
        {SUGGESTIONS.map((suggestion) => (
          <Suggestion key={suggestion.id} sug={suggestion} />
        ))}
      </div>
    </div>
  );
};

export default Trends;

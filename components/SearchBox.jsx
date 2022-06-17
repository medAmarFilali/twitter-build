import { SearchIcon } from "@heroicons/react/outline";

const SearchBox = () => {
  return (
    <div className="px-4 pt-1">
      <div className="px-4 py-3 rounded-full bg-zinc-900 w-full">
        <div className="flex items-center space-x-4">
          <SearchIcon className="h-6 w-6 text-zinc-600 " />
          <input
            type="text"
            placeholder="Search tweeter"
            className="bg-zinc-900 focus:outline-none "
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

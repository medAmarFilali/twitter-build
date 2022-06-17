import FollowSug from "./FollowSug";
import SearchBox from "./SearchBox";
import Trends from "./Trends";

const Sidebar = () => {
  return (
    <div>
      <div className="fixed top-0 bg-black max-w-[500px] ">
        <SearchBox />
      </div>
      <div className="mt-16 w-full p-4">
        <Trends />
        <FollowSug />
      </div>
    </div>
  );
};

export default Sidebar;

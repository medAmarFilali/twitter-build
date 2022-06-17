const MenuItem = ({ icon, text }) => {
  return (
    <div className="relative flex h-16 w-16 md:h-auto md:w-full items-center space-x-4 rounded-full py-2 px-4 transition-all duration-300 ease-out hover:bg-zinc-900 cursor-pointer">
      {icon}
      <p className="text-lg font-semibold w-full hidden md:inline-grid">
        {text}
      </p>
    </div>
  );
};

export default MenuItem;

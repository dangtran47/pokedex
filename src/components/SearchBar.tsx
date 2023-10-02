const SearchBar = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}) => {
  return (
    <div className="mb-3">
      <input
        type="search"
        className="text-lg relative m-0 block h-16 w-full min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-4 py-4 text-base font-normal text-neutral-700 outline-none transition duration-200 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-md focus:outline-none rounded-xl"
        id="PokeSearch"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onReset={() => setSearchQuery('')}
      />
    </div>
  );
};

export default SearchBar;

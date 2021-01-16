import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function ProvideSearch({ children }) {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  return useContext(SearchContext);
}

export { ProvideSearch, useSearch };

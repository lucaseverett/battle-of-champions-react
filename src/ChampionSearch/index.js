import { useSearch } from "../context/searchProvider.js";
import styles from "./styles.js";

function ChampionSearch() {
  const { search, setSearch } = useSearch();
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className={styles}>
      <input value={search} onChange={handleSearch} placeholder="Search" />
      <span className="material-icons">search</span>
    </div>
  );
}

export default ChampionSearch;

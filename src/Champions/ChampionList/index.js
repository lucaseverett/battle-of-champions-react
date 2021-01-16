import { useEffect, useState } from "react";
import useRoute from "../../hooks/useRoute.js";
import { getChampions, getTop } from "../../context/championProvider.js";
import { useDebounce } from "../../hooks/useDebounce.js";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/searchProvider.js";
import styles from "./styles.js";
import Loading from "../../Loading";

function ChampionList() {
  const { search } = useSearch();
  const [champions, setChampions] = useState([]);
  const [loading, setLoading] = useState(true);
  const debouncedSearch = useDebounce(search, 300);
  const route = useRoute();

  useEffect(() => {
    setLoading(true);
    async function fetchAll() {
      setChampions(await getChampions(route, debouncedSearch));
      setLoading(false);
    }
    async function fetchTop() {
      setChampions(await getTop(debouncedSearch));
      setLoading(false);
    }
    if (route === "dashboard") {
      fetchTop();
    } else {
      fetchAll();
    }
  }, [route, debouncedSearch]);

  return (
    <div className={styles}>
      <div className="top-bar">
        <h1>
          <span className="champion">
            {route === "dashboard" ? "Top" : route}
          </span>{" "}
          Champions
        </h1>
        {route !== "dashboard" && (
          <Link to={`/${route}/add`}>Add Champion</Link>
        )}
      </div>
      {loading ? (
        <Loading />
      ) : champions?.length ? (
        <ul>
          {champions.map(({ name, id, city }) => (
            <li key={name}>
              <Link to={`/${city}/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        "No champions found"
      )}
    </div>
  );
}

export default ChampionList;

import { useEffect, useState } from "react";
import useRoute from "../hooks/useRoute.js";
import { useParams } from "react-router-dom";
import {
  getChampion,
  updateChampion,
  deleteChampion,
} from "../context/championProvider.js";
import styles from "./styles.js";
import Loading from "../Loading";

function ChampionDetail() {
  const { id } = useParams();
  const route = useRoute();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleSave() {
    updateChampion(route, id, name);
    handleGoBack();
  }

  function handleDelete() {
    deleteChampion(route, id);
    handleGoBack();
  }

  function handleGoBack() {
    history.back();
  }

  useEffect(() => {
    async function getName() {
      const { name } = await getChampion(route, id);
      setName(name);
      setLoading(false);
    }

    getName();
  }, []);

  return (
    <div className={styles}>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h1>
            <span className="champion">{name}</span> Details
          </h1>
          <label htmlFor="id">ID</label>
          <input value={id} name="id" id="id" readOnly />
          <label htmlFor="name">Name</label>
          <input value={name} name="name" id="name" onChange={handleName} />
          <button onClick={handleSave} disabled={!name} className="submit">
            Save
          </button>
          <button onClick={handleGoBack} className="button">
            Cancel
          </button>
          <button onClick={handleDelete} className="delete">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default ChampionDetail;

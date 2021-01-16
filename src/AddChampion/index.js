import { useState } from "react";
import useRoute from "../hooks/useRoute.js";
import { addChampion } from "../context/championProvider.js";
import styles from "./styles.js";

function AddChampion() {
  const route = useRoute();
  const [name, setName] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleSave() {
    addChampion(route, name);
    handleGoBack();
  }

  function handleGoBack() {
    history.back();
  }

  return (
    <div className={styles}>
      <h1>
        <span className="champion">{route}</span> Champion
      </h1>
      <label htmlFor="name">Name</label>
      <input value={name} name="name" id="name" onChange={handleName} />
      <button onClick={handleSave} disabled={!name} className="submit">
        Save
      </button>
      <button onClick={handleGoBack}>Cancel</button>
    </div>
  );
}

export default AddChampion;

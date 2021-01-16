import ChampionSearch from "../ChampionSearch";
import ChampionList from "./ChampionList";
import styles from "./styles.js";

function Champions() {
  return (
    <div className={styles}>
      <ChampionSearch />
      <ChampionList />
    </div>
  );
}

export default Champions;

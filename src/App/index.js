import { useLayoutEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Champions from "../Champions";
import About from "../About";
import ChampionDetail from "../ChampionDetail";
import AddChampion from "../AddChampion";
import Nav from "../Nav";
import { ProvideSearch } from "../context/searchProvider.js";
import styles from "./styles.js";
import ScrollToTop from "../ScrollToTop.js";

function App() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(true);
  }

  useLayoutEffect(() => {
    if (menu) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menu]);

  const scrollRef = useRef(null);

  return (
    <ProvideSearch>
      <div className={styles} ref={scrollRef} tabIndex="-1">
        <a className="menu" onClick={handleMenu} tabIndex="0">
          <span className="material-icons">menu</span>
        </a>
        <Router
          basename={
            process.env.NODE_ENV === "development"
              ? "/"
              : "/battle-of-champions"
          }
        >
          <ScrollToTop {...{ scrollRef }} />
          <Nav {...{ setMenu }} />
          <main>
            <Switch>
              <Route path="/sparta/add" component={AddChampion} />
              <Route path="/sparta/:id" component={ChampionDetail} />
              <Route path="/sparta" component={Champions} />
              <Route path="/argos/add" component={AddChampion} />
              <Route path="/argos/:id" component={ChampionDetail} />
              <Route path="/argos" component={Champions} />
              <Route path="/about" component={About} />
              <Route path="/" component={Champions} />
            </Switch>
          </main>
        </Router>
      </div>
    </ProvideSearch>
  );
}

export default App;

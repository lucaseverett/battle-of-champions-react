import readme from "../../README.md";
import styles from "./styles.js";

function About() {
  return (
    <div className={styles}>
      <h1>
        <span className="about">About</span> Battle of Champions
      </h1>
      <div dangerouslySetInnerHTML={{ __html: readme }}></div>
    </div>
  );
}

export default About;

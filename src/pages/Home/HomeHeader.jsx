import styles from "./Home.module.scss";

const HomeHeader = () => {
  return (
    <div className={styles["home-header"]}>
      <a>
        Home
      </a>
      <a>
        About
      </a>
      <a>
        Projects
      </a>
      <a>
        Experience
      </a>
      <a>
        Contact
      </a>
    </div>
  )
}

export default HomeHeader
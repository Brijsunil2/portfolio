import styles from "./Home.module.scss";
import HomeHeader from "./HomeHeader";

const Home = () => {
  return (
    <div className={styles["home-page"]}>
      <HomeHeader />
    </div>
  );
};

export default Home;

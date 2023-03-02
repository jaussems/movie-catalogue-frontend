import Link from "next/link";
import styles from "../../styles/NavBar.module.scss";
const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            {" "}
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/genres">Genres</Link>
          </li>
          <li>
            <Link href="/profilepage">Profile Page</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;

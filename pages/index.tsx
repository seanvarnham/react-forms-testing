import type { NextPage } from "next";
import PageFooter from "../components/Footer/PageFooter";
import PageHead from "../components/Header/PageHead";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
	return (
		<>
			<PageHead />

			<div className={styles.container}>
				<main className={styles.main}>
					<h1 className={styles.title}>Testing React Forms</h1>
				</main>

				<PageFooter />
			</div>
		</>
	);
};

export default Home;

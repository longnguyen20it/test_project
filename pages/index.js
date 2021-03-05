import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/common/Header";
import Container from "../components/container";
import Footer from "../components/common/Footer";
export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Container>
                    <Header />
                    <div className="jumbotron">
                        <h1 className="display-3">Jumbo heading</h1>
                        <p className="lead">Jumbo helper text</p>
                        <hr className="my-2" />
                        <p>More info</p>
                        <p className="lead">
                            <a
                                className="btn btn-primary btn-lg"
                                href="Jumbo action link"
                                role="button"
                            >
                                Jumbo action name
                            </a>
                        </p>
                    </div>
                </Container>
            </main>
            <Footer/>
        </div>
    );
}

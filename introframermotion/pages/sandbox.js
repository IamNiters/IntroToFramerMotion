import Head from "next/head";
import styles from "../styles/Sandbox.module.css"
import {motion} from "framer-motion";

export default function Sandbox () {
    return (
        <div>
            <Head>
                <title>Anim Lab</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <section className={styles.herosection}>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden : {
                    scale : 0.8,
                    opacity: 0
                },
                
                visible: {
                    scale: 2,
                    opacity: 1,
                    transition  : {
                        delay: 0.4
                    }
                }
            }}>
                <h1>Hello Next World</h1>
            </motion.div>
            </section>

            <main className={styles.mainwrapper}>
            <section className={styles.iphonesection}>
                <nav className={styles.iphonenavbar}>
                    <ul className={styles.appleproducts}>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iWatch</li>
                        <li>iTV</li>
                        <li>Music</li>
                        <li>Assistance</li>
                    </ul>
                </nav>
            </section>

            <section className={styles.iphonebreakdown}>
                <h1>Hello React World</h1>

            </section>
            </main>

        </div>
    )
};
import Head from "next/head";
import styles from "../styles/Sandbox.module.css"
import Link from "next/link";
import {motion} from "framer-motion";

export default function Sandbox () {
    return (
        <div>
            <Head>
                <title>FramerMotion Intro</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
        

            <main className={styles.mainwrapper}>
            <section className={styles.iphonesection}>
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


                <nav className={styles.iphonenavbar}>
                    <ul className={styles.appleproducts}>
                        <li className={styles.navicon}>
                            <img src="/apple.png"
                            alt="Apple logo"
                            width={20}
                            height={20}
                            >
                        </img></li>
                        <li className={styles.productref}>Mac</li>
                        <li className={styles.productref}>iPad</li>
                        <li className={styles.productref}>iPhone</li>
                        <li className={styles.productref}>Watch</li>
                        <li className={styles.productref}>iTV</li>
                        <li className={styles.productref}>Music</li>
                        <li className={styles.productref}>Assistance</li>
                        <li className={styles.navicon}>
                            <img src="/magnifying-glass.png"
                            alt="magnigying-glass"
                            width={20}
                            height={20}
                            >
                        </img></li>
                        <li className={styles.navicon}>
                            <img src="/shopping-bag.png"
                            alt="shopping-bag"
                            width={20}
                            height={20}
                            >
                        </img></li>
                    </ul>
                </nav>

                <nav className={styles.navproductref}>
                    <div className={styles.leftproductref}>
                        <span className={styles.xsmalltitle}> iPhone 12 Pro</span>
                        <span className={styles.xxxsmalltitle}>Nouveau</span>
                    </div>

                    <div className={styles.rightproductref}>
                        <span className={styles.presentation}> présentation</span>
                        <span className={styles.caracteristiques}> Caractéristiques techniques</span>
                        <span className={styles.buttonnav}> Acheter </span>
                    </div>
                </nav>

                <span className={styles.smalltitle}> iPhone 12 Pro</span>
                <span className={styles.bigtitle}> On n'arrête pas le progrès.</span>
                <span className={styles.bigtitle}> On l'accélère</span>

                <div className={styles.iphoneswrapper}>

                    <div className={styles.leftiphone}>
                        <img className={styles.imgiphone} src="/iphoneleft.png" alt="iphone12Pro"></img>
                    </div>

                    <div className={styles.middleiphone}>
                        <img className={styles.imgiphone} src="/iphonemiddle.png" alt="iphone12Pro"></img>
                    </div>

                    <div className={styles.rightiphone}>
                        <img className={styles.imgiphone} src="/iphoneright.png" alt="iphone12Pro"></img>
                    </div>

                </div>

                <div className={styles.photoparagraph}>
                    <span className={styles.bigtitlevarun}>Système photo pro</span>
                    <span className={styles.bigtitlevardeux}>Le mode Nuit sous</span>
                    <span className={styles.bigtitlevardeux}>un nouveau jour.</span>
                </div>

            </section>
            </main>

        </div>
    )
};
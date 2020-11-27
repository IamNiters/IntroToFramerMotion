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
            
            <section className={styles.herosection}>
            
                <h1>Hello Wilder !</h1>
                <a className={styles.githublink} href="https://github.com/iamniters">Check my Github !</a>

            </section>

            <main className={styles.mainwrapper}>
            <section className={styles.iphonesection}>

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

                <motion.span initial="hidden" animate="visible" variants={{
                    hidden : {
                        scale : 0,
                        opacity : 0
                    },
                    visible : {
                        scale : 2,
                        opacity : 1,
                        transition : {
                            delay : 1
                        }

                    }
                }} className={styles.smalltitle}> iPhone 12 Pro</motion.span>

                <motion.span initial="hidden" animate="visible" variants={{
                    hidden : {
                        scale : 0,
                        opacity : 0
                    },
                    visible : {
                        scale : 1.5,
                        opacity : 1,
                        transition : {
                            delay : 1
                        }

                    }
                }} className={styles.bigtitle}> On n'arrête pas le progrès.</motion.span>

                <motion.span initial="hidden" animate="visible" variants={{
                    hidden : {
                        scale : 0,
                        opacity : 0
                    },
                    visible : {
                        scale : 1.5,
                        opacity : 1,
                        transition : {
                            delay : 1
                        }

                    }
                }} className={styles.bigtitle}> On l'accélère</motion.span>

                <div className={styles.iphoneswrapper}>

                    <motion.div initial="hidden" animate="visible" variants={{
                    hidden : {
                        scale : 1,
                        opacity : 0,
                        left : -1000

                    },
                    visible : {
                        scale : 1,
                        opacity : 1,
                        left : 0,
                        transition : {
                            delay : 1,
                            duration : 1 
                        }

                    }
                }}className={styles.leftiphone}>
                        <img className={styles.imgiphone} src="/iphoneleft.png" alt="iphone12Pro"></img>
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" variants={{
                    hidden : {
                        scale : 1,
                        opacity : 0,
                        top : -1000
                    },
                    visible : {
                        scale : 1,
                        opacity : 1,
                        top: 250,
                        transition : {
                            delay : 1,
                            duration : 1.5
                        }
                    }
                }} className={styles.middleiphone}>
                        <img className={styles.imgiphone} src="/iphonemiddle.png" alt="iphone12Pro"></img>
                    </motion.div>

                    < motion.div initial="hidden" animate="visible" variants={{
                    hidden : {
                        scale : 1,
                        opacity : 0,
                        right : -1000
                    },
                    visible : {
                        scale : 1,
                        opacity : 1,
                        right: 0,
                        transition : {
                            delay : 1,
                            duration : 1.5
                        }
                    }
                }}  className={styles.rightiphone}>
                        <img className={styles.imgiphone} src="/iphoneright.png" alt="iphone12Pro"></img>
                    </motion.div>

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
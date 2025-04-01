import Head from 'next/head'
import styles from './styles.module.css'

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Dashboard</title>
            </Head>

            <h1 className={styles.title}>Página painel</h1>
        </div>
    )
}
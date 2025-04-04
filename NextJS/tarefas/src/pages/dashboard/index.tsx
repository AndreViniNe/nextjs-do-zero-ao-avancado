import Head from 'next/head'
import styles from './styles.module.css'
import { TextArea } from '@/components/TextArea'
import { GetServerSideProps } from 'next'

import {getSession} from 'next-auth/react'

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Dashboard</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.contentTitle}>Qual sua tarefa?</h1>
                        <form action="">
                            <TextArea placeholder='Digite a sua tarefa...'/>

                            <div className={styles.checkboxArea}>
                                <input type="checkbox" className={styles.checkbox}
                                />
                                <label>Deixar tarefa pública</label>
                            </div>
                            <button type='submit' className={styles.button}>Registrar</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    // console.log(session);

    if (!session?.user) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {},
    };
};
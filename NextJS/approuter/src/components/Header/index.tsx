import Link from "next/link";
import styles from "@/components/Header/header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>AppRouter</h1>
            <Link href="/">Home</Link>
            <Link href="/contatos">Contatos</Link>
            <Link href="/dashboard">Painel</Link>

            <br /><br />
            <hr />
            
        </header>
    )
}
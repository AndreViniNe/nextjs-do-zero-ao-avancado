import Link from "next/link"

export const metadata = {
    title: 'Painel do site',
    description: 'Painel demonstrativo do site,'
}

export default function DashboardLayout({
    children,
}: {children: React.ReactNode}) {
    return (
        <>
            <h3>Header do dashboard ----   
                <Link href="/dashboard/settings"> Settings</Link>
            </h3>
            
            <br />
            {children}
        </>
    )
}
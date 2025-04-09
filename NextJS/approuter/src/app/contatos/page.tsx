'use client'

import { useState } from "react"

export default function Contatos() {
    const [user, setUser] = useState('ANDRE VINICIUS');

    return (
        <div>
            <h1>Contatos</h1>
            <span>Contato 1: 123456-789 do usuário {user}</span>
        </div>
    )
}
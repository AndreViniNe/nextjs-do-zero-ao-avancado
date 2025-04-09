'use client'

import Image from "next/image";
import { useState } from 'react'

interface OwnerRepoProps {
    avatar_url: string;
    name: string;
}

export function OwnerRepo({avatar_url, name}: OwnerRepoProps) {
    const [show, setShow] = useState(false)

    return (
        <div>
            {show && (
                <>
                    <Image
                        src={avatar_url}
                        alt="Avatar do usuário"
                        width={40}
                        height={40}
                        style={{ borderRadius: "8px" }}
                    />
                    <strong>{name} <br /></strong>
                </>
            )}

            <button onClick={() => setShow(!show)}>
                {show ? "Ocultar informações" : "Mostrar informações"}
            </button>
        </div>
    )
}
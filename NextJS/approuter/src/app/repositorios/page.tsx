'use client'

import { useState, useEffect, use } from 'react'

interface DataProps {
    id: number;
    name: string;
    full_name: string;
    owner: {
      login: string;
      id: number;
      avatar_url: string;
      url: string;
    }
  }

export default function Repositorios() {
    const [repos, setRepos] = useState<DataProps[]>([])
    useEffect(() => {
        function getData() {
            fetch('https://api.github.com/users/AndreViniNe/repos')
            .then(response => response.json())
            .then((data: DataProps[]) => {
                setRepos(data)
            })
        }
            
        getData();
        }
    , [])

    return (
        <div>
            <h1>Página repositórios</h1>

            {repos.map((item) => (
                <div key={item.id}>
                <span><strong>Repositório: </strong>{item.name}</span><br /><br />
                </div>
            ))}
        </div>
    )
}
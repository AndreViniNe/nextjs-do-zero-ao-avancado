interface PageDetailProps {
    params: {
        id: string,
    }
}

async function getData(id: string) {
  const response = await fetch('https://api.github.com/users/AndreViniNe/repos');
  return response.json();
}

export default async function RepositorioID({params}: PageDetailProps) {
    // const data = await getData(params.id);

    const { id } = await params;

    return (
        <div>
            <h1>Pagina detalhes do repositório {id}</h1>
        </div>
    )
}
import { OwnerRepo } from "@/components/OwnerRepo";

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

async function delayFetch(url: string, delayTime: number) {
  await new Promise(resolve => setTimeout(resolve, delayTime));
  const response = await fetch(url, {next: {revalidate: 120}});
  return response.json();
}

// async function getData() {
//   const response = await fetch('https://api.github.com/users/AndreViniNe/repos');
//   return response.json();
// }

async function getData() {
  const data = await delayFetch('https://api.github.com/users/AndreViniNe/repos', 0)
  return data;
}

export default async function Home() {
  const data: DataProps[] = await getData();

  return (
    <main>
      <h1>Home Page</h1>
      <span>Welcome to home page</span><br />
      <h3>Repositórios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <span><strong>Repositório: </strong>{item.name}</span>
          <br />
          <OwnerRepo
            avatar_url={item.owner.avatar_url}
            name={item.owner.login}
          />
          <br />
        </div>
      ))}
    </main>
  )
}
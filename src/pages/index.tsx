import { useServerLoaderData } from "umi";
import yayJpg from "../assets/yay.jpg";

export default function HomePage() {
  const { data } = useServerLoaderData();
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <h3>Users from server loader:</h3>
      <ol>
        {data.users.map((user: string) => <li key={user}>{user}</li>)}
      </ol>
    </div>
  );
}

export async function serverLoader() {
  return {
    users: ["sorrycc", "pigcan"],
  };
}

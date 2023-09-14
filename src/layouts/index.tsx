import { Link, Outlet, useServerLoaderData } from "umi";
import styles from "./index.less";

export default function Layout() {
  // const { data, error } = useServerLoaderData();
  // console.log('data', data, error);
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
        {/* {(data.extraLinks || []).map((link: any) => (
          <li key={link.href}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))} */}
      </ul>
      <Outlet />
    </div>
  );
}

// export async function serverLoader() {
//   return {
//     extraLinks: [{ title: "baidu", href: "https://www.baidu.com" }],
//   };
// }

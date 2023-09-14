import { useServerLoaderData } from 'umi';

const DocsPage = () => {
  const { data } = useServerLoaderData();
  return (
    <div>
      <p>{`This is ${data.frameworkName} docs.`}</p>
    </div>
  );
};

export default DocsPage;

export async function serverLoader() {
  return {
    frameworkName: 'umi'
  };
}

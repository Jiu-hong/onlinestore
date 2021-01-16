import Layout from '../components/layout';

export default function About() {
  return (
    <Layout>
      <div className="container">
        <p>Name: Jiuhong Sun</p>

        <p>Tel: +86 18940960582</p>
        <p>
          Email:{' '}
          <a href="mailto:jiu.hong.sun@gmail.com">jiu.hong.sun@gmail.com</a>
        </p>
      </div>
    </Layout>
  );
}

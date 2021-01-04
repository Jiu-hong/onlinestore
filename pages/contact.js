import Layout from '../components/layout';
export default function About() {
    return (
        <Layout>
            <div className="container">
                <p>Name: Jiuhong Sun</p>

                <p>
                    Tel: <a href="tel:+86 18940960582">+86 18940960582</a>
                </p>
                <p>
                    Email:{' '}
                    <a href="mailto:jiu.hong.sun@gmail.com">
                        jiu.hong.sun@gmail.com
                    </a>
                </p>
            </div>
        </Layout>
    );
}

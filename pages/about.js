import Layout from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';
export default function About() {
    return (
        <Layout>
            <div className="container">
                <p>Author is Jiuhong Sun. </p>
                <p>I am glad to help you with your web apps!</p>
                <p>Let me know if I can help you!</p>
                <Link href="/contact">
                    <a className="nav-link text-success">
                        <Image src="/bedtime.icon" width={70} height={70} />
                        <p>Contact me</p>
                    </a>
                </Link>
            </div>
        </Layout>
    );
}

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
/*
export async function getServerSideProps(req, res) {
    //export async function getServerSideProps() {
    await dbConnect();

    /* var ordernumber = Math.floor(new Date().valueOf() + Math.random());

    /* find all the data in our database
    ItemInstance.find({ _id: '5ff2f7b095a705a5af4d6eba' })
        .then((items_cart) => console.log('items_cart: ', items_cart))
        .catch((err) => console.log('err: ', err));
    var order = new Order({
        ordernumber: ordernumber,
        itemInstances: ['5ff2f7b095a705a5af4d6eba', '5ff2f7b095a705a5af4d6eba'],
        user: 'qbmdqff',
        buy_date: Date.now(),
    });

    await order.save().then((result) => console.log('result: ', result));

    Order.find({ ordernumber: ordernumber })
        .populate('itemInstances')
        .then((result) => console.log('resultpopulate: ', result));

    return { props: { items: 'items' } };
}*/

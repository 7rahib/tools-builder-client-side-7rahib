import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const CheckoutPage = () => {
    const { _id } = useParams();

    const url = `http://localhost:5000/tools/${_id}`;

    const { data, isLoading } = useQuery('tool', () => fetch(url).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row">
                <div className='grid lg:grid-cols-3'>
                    <img src={data.image} class="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt={data.name} />
                </div>
                <div>
                    <h1 class="text-5xl font-bold">{data.name}</h1>
                    <p class="py-6">{data.about}</p>
                    <p className='mt-4 text-xl'>Available quantity: {data.quantity} pieces</p>
                    <p><span className='text-warning text-xl'>{data.min_quantity} pieces</span> is our minimum order limit</p>
                    <p className='text-success font-semibold text-2xl'>Price: ${data.price}</p>
                    <button class="btn btn-primary mt-2">Payment</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
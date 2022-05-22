import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const CheckoutPage = () => {
    const { _id } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const url = `http://localhost:5000/tools/${_id}`;

    const { data, isLoading, refetch } = useQuery('tool', () => fetch(url).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const quantity = data.quantity;

    const onSubmit = data => {
        const newQuantity = { quantity: parseInt(quantity) - parseInt(data.newQuantityValue) };
        const url = `http://localhost:5000/tools/${_id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                reset()
            })
    }


    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className='grid lg:grid-cols-3'>
                    <img src={data.image} className="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt={data.name} />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">{data.name}</h1>
                    <p className="py-6">{data.about}</p>
                    <p className='mt-4 text-xl'>Available quantity: {data.quantity} pieces</p>
                    <p><span className='text-warning text-xl'>{data.min_quantity} pieces</span> is our minimum order limit</p>
                    <p className='text-success font-semibold '><span className='text-2xl'>${data.price}</span> per unit price</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="number"
                                className="input input-bordered w-full max-w-xs"
                                placeholder='Our purchase newQuantity'
                                {...register("newQuantityValue", {
                                    required: {
                                        value: true,
                                        message: 'newQuantity is Required'
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.newQuantityValue?.type === 'required' && <span className="label-text-alt text-error">{errors.newQuantityValue.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-info mt-2' type="submit" value="Payment" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default CheckoutPage;
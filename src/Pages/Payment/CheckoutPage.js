import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const CheckoutPage = () => {
    const { _id } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const user = useAuthState(auth);
    const navigate = useNavigate();


    const url = `http://localhost:5000/tools/${_id}`;

    const { data: tool, isLoading, refetch } = useQuery('tool', () => fetch(url).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    // const quantity = data.quantity;

    // const onSubmit = data => {
    //     const newQuantity = { quantity: parseInt(quantity) - parseInt(data.newQuantityValue) };
    //     const url = `http://localhost:5000/tools/${_id}`;
    //     fetch(url, {
    //         method: "PUT",
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         },
    //         body: JSON.stringify(newQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             refetch()
    //             reset()
    //         })
    // }

    const onSubmit = data => {


        const order = {
            orderId: _id,
            name: tool.name,
            price: tool.price,
            quantity: data.newQuantityValue,
            email: (user[0].email),
            userName: (user[0].displayName),
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast(`Order is set for ${tool.name}`)
                }
                else {
                    toast.error(`Failed to set order for ${tool.name}`)
                }
                refetch()
                reset()
            })
    }


    return (
        <div className='mx-5 mb-2'>
            <div className='flex justify-center mt-10'>
                <div className="card lg:w-lg bg-base-200 shadow-2xl text-neutral-content">
                    <div className="card-body">
                        <h2 className="card-title">Welcome <span className='text-warning'>{(user[0]?.displayName)}</span>,</h2>
                        <p>You have logged in with <span className='text-warning'>{(user[0]?.email)}</span>. We will contact you there if needed.</p>
                    </div>
                </div>
            </div>
            <button className='kbd mt-2 lg:ml-20' onClick={() => navigate(-1)}>◀︎ Go back</button>
            <div className="hero min-h-screen bg-base-100 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='grid lg:grid-cols-3'>
                        <img src={tool.image} className="sm:max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt={tool.name} />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{tool.name}</h1>
                        <p className="py-6">{tool.about}</p>
                        <p className='mt-4 text-xl'>Available quantity: {tool.quantity} pieces</p>
                        <p><span className='text-warning text-xl'>{tool.min_quantity} pieces</span> is our minimum order limit</p>
                        <p className='text-success font-semibold '><span className='text-2xl'>${tool.price}</span> per unit price</p>
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
                            <input className='btn btn-info mt-2' type="submit" value="Confirm Order" />
                        </form>
                    </div>
                </div>
            </div >
        </div>


    );
};

export default CheckoutPage;
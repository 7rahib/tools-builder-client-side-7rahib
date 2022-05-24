import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate()

    const onSubmit = data => {

        const newTool = {
            name: data.name,
            about: data.about,
            price: data.price,
            quantity: data.quantity,
            min_quantity: data.min_quantity,
            image: data.image
        }
        fetch('https://cryptic-island-51343.herokuapp.com/tools', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newTool)
        })
            .then(res => res.json())
            .then(data => {
                reset()
                navigate('/dashboard/manageproduct')
            })
    }


    return (
        <div>
            <h3 className='text-2xl'>Add New Product</h3>
            <div className='flex justify-center items-center'>
                <div className="card w-96 bg-base-200 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-error">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">About</span>
                                </label>
                                <textarea
                                    type="text"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("about", {
                                        required: {
                                            value: true,
                                            message: 'About is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.about?.type === 'required' && <span className="label-text-alt text-error">{errors.about.message}</span>}
                                </label>
                            </div>
                            <div className='flex gap-2'>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("price", {
                                            required: {
                                                value: true,
                                                message: 'Price is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.price?.type === 'required' && <span className="label-text-alt text-error">{errors.price.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("quantity", {
                                            required: {
                                                value: true,
                                                message: 'Price is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-error">{errors.quantity.message}</span>}
                                    </label>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Minimum Quantity</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("min_quantity", {
                                            required: {
                                                value: true,
                                                message: 'Price is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.min_quantity?.type === 'required' && <span className="label-text-alt text-error">{errors.min_quantity.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: 'Image is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.image?.type === 'required' && <span className="label-text-alt text-error">{errors.image.message}</span>}
                                    </label>
                                </div>
                            </div>
                            <input className='btn btn-info w-full max-w-xs text-accent-content mt-2' type="submit" value="Add New Product" />
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AddProducts;
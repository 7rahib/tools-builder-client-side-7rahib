import React from 'react';

const ReviewsCard = ({ review }) => {

    const { toolName, userReview, userName, image, rating } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt={toolName} class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{toolName}</h2>
                <p>{userReview}</p>
                <p>{userName}</p>
                <p>{rating}</p>
            </div>
        </div>
    );
};

export default ReviewsCard;
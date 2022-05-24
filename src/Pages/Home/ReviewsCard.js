import React from 'react';
import './ReviewCard.css'
import Rating from "react-rating";

const ReviewsCard = ({ review }) => {

    const { toolName, userReview, userName, image, rating } = review;


    return (
        <div className="review-card">
            <div className="main-review">
                <div>
                    <div className="review-img-div">
                        <div className="review-img-div2">
                            {
                                image ? <img className="review-img" src={image} alt={toolName} /> :
                                    <div className="review-name-text">
                                        <div>{toolName}</div>
                                    </div>
                            }
                        </div>

                    </div>
                    <p className="reviewer-tool">
                        {toolName}
                    </p>
                    <p className="reviewer-name">
                        {userName}
                    </p>
                    <Rating
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        showInactive={false}
                        readonly
                        initialRating={rating} />

                    <p className="review-msg">
                        {userReview}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;
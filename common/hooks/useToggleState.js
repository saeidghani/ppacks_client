import React, {Fragment, useEffect, useState} from "react";
import {Card} from "antd";
import {Button} from 'antd';

import ReviewsStyles from "../../styles/UserReviewsStyles";
import http from "../../common/utils/http";
import {reviewsApi} from "../../common/api";

function UserReviews({book}) {
    const [helpfulReviews, setHelpfulReviews] = useState([]);
    const currentUserId = 3;

    useEffect(() => {
        let initialHelpfulReviews = [];
        book.reviews.map(review =>
            review.helpful_by.find(userId => userId === currentUserId) ?
                reviewIdsList.push(review.id) :
                null
        );
        setReviewIdsHelpfulByCurrentUser(reviewIdsList);
    }, []);


    const toggleHelpfulBy = async (review) => {
        const {id, highlight, text, book, user, helpful_by} = review;
        const reviewIsHelpfulByCurrentUser = helpful_by.find(userId => userId === currentUserId);
        const newHelpfulBy = reviewIsHelpfulByCurrentUser ?
            helpful_by.filter(userId => userId !== currentUserId) :
            [...helpful_by, currentUserId];
        console.log(newHelpfulBy);
        const updatedReview = {
            'id': review.id,
            highlight,
            text,
            book,
            'user': user.id,
            'helpful_by': newHelpfulBy
        };
        try {
            await http.put(`${reviewsApi}${id}/`, updatedReview);
            const newReviewIdsList = reviewIsHelpfulByCurrentUser ?
                reviewIdsHelpfulByCurrentUser.filter(reviewId => reviewId !== review.id) :
                [...reviewIdsHelpfulByCurrentUser, review.id];
            console.log(newReviewIdsList);
            setReviewIdsHelpfulByCurrentUser(newReviewIdsList);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Card style={{marginTop: '2rem'}}>
            <ReviewsStyles>
                {book.reviews.map(review =>
                    <Fragment key={review.id}>
                        <div>
                            <img src={review.user.photo} alt="user"/> <span>{review.highlight}</span>
                            <h4>{review.user.first_name}</h4><h4>{review.user.last_name}</h4>
                        </div>
                        <div>
                            <span>{book.title}</span>
                            <p>{review.text}</p>
                            <Button onClick={() => toggleHelpfulBy(review)}>
                                {reviewIdsHelpfulByCurrentUser.find(reviewId => reviewId === review.id) ?
                                    <span>was helpful</span> :
                                    <span>helpful</span>}
                            </Button>
                        </div>
                    </Fragment>
                )}
            </ReviewsStyles>
        </Card>
    )
}

export default UserReviews;
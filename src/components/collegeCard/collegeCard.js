import React from 'react';
import style from './style.css';

const CollgeCard = (props) => {
    /* pass the received data to the College card component*/
    const {college_name,promoted,discount,original_fees,discounted_fees,
        fees_cycle,image,ranking,tags,amenties,rating,rating_remarks,
        nearest_place,famous_nearest_places,offertext} = props.college;

    return (
        <div className='college-card'>
            {promoted && <div className='promoted-tag'>PROMOTED</div>}
            <div className='college-header'>
                <div className='rating'>
                    <div className='rating-no'>
                        <span>{rating}</span>
                        /5
                    </div>
                    <div>{rating_remarks}</div>
                </div>
                <div className='tag-container'>
                    {tags.map(tag => <span className='tag'>{tag}</span>)}
                </div>
                <div className='ranking-text'>#{ranking}</div>
            </div>
            <div className='college-info'>
                <div className='college-details'>
                    <div className='college-name'>
                        {college_name}
                    </div>
                    <div className='college-fees'>
                    <strike> ₹ {original_fees} </strike>
                        <span>{discount}</span>
                    </div>
                </div>
                <div className='college-knowhows'>
                    <div className='nearest-places'>
                        {nearest_place.join('  |  ')}
                    </div>
                    <div className='discounted-fee'>
                    <span>₹ {discounted_fees}</span>
                    <sub>{fees_cycle}</sub>
                    </div>
                </div>
                <div className='college-extra-info'>
                    <div className='offer-text'>
                        {offertext}
                    </div>
                    <div className='amenties'>
                        {amenties.join(' - ')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollgeCard;
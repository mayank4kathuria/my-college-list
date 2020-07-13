import React from 'react';
import style from './style.css';

const CollgeCard = (props) => {
    /* pass the received data to the College card component*/
    const {college_name,promoted,discount,original_fees,discounted_fees,
        fees_cycle,image,ranking,tags,amenties,rating,rating_remarks,
        nearest_place,famous_nearest_places,offertext} = props.college;

    return (
        <div className='college-card'>
            {promoted && <div className='promoted-tag'>TAG</div>}
            <div className='college-header'>
                <div className='rating'>
                    <div>{rating}</div>
                    <div>{rating_remarks}</div>
                </div>
                <div className='tag-container'>
                    {tags.map(tag => <span className='tag'>{tag}</span>)}
                </div>
                <div>{ranking}</div>
            </div>
            <div className='college-info'>
                <div>
                    <div>
                        {college_name}
                    </div>
                    <div>
                        {original_fees}
                        <span>{discount}</span>
                    </div>
                </div>
                <div>
                    <div>{nearest_place.join('  |  ')}</div>
                    <div>{discounted_fees}</div>
                </div>
                <div>
                    <div>
                        {offertext}
                    </div>
                    <div>
                        {amenties.join(' - ')}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollgeCard;
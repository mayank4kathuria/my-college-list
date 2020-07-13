import React from 'react';
import './style.css';
import LazyLoad from '../../components/HOC/LazyLoad';
import CollegeCard from '../../components/collegeCard/index.js';
import data from '../../dummyData/data.json';

class CollegeList extends React.Component {
    constructor(props){
        super();
        
        this.state = {
            colleges: [],
            page: 0,
        };
        this.incrementPage = this.incrementPage.bind(this);
        this.incrementBy = 10;
    }
    
    componentDidMount(){
        const colleges = data;
        this.incrementPage();
    }

    incrementPage() {
        const {page} = this.state;
        const incrementBy = this.incrementBy;
        const nextPage = page + incrementBy;
        const newData = data['colleges'].length > 0 && data['colleges'].slice(page,nextPage) || [];

        if (nextPage <= data['colleges'].length){
            this.setState((prevState) => ({
                colleges: [...prevState.colleges,...newData],
                page: nextPage,
            }))
        }
    }

    render(){
        const { colleges } = this.state;
        console.log(colleges);
        return (
            <div className='college-container'>
                <section className='head'>
                    Colleges in North India
                </section>
                <section className='body'>
                    {colleges.length > 0 && (<LazyLoad increment={this.incrementPage}>
                        <div className='lazy-class'>
                            {colleges.map(college => 
                                <CollegeCard college={college}/>) 
                            }
                        </div>
                    </LazyLoad>)
                    }
                </section>
            </div>
        )
    }
};

export default CollegeList;
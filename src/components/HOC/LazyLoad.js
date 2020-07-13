import React from 'react';


class LazyLoad extends React.PureComponent {

    componentDidMount(){
        const { increment } = this.props;
        const options = {
            root: null,
            rootMargin: '90px 0px',
            threshold: 0,
        }
        const callBack = enteries => {
            if(enteries[0].isIntersecting) {
                increment();
            }
            return ;
        }
        const observer = new IntersectionObserver(callBack,options);
        const target = document.querySelector('#lazy-load-anchor');

        observer.observe(target);
    }
    
    render(){
        return (
            <div className='lazy-class'>
                {this.props.children}
            </div>
        )
    }
}

export default LazyLoad;
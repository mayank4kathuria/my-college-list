import React from 'react';


class LazyLoad extends React.PureComponent {

    componentDidMount(){
        const { children,increment } = this.props;
        const options = {
            root: null,
            rootMargin: '-5px',
            threshold: 0
        }
        const callBack = enteries => {
            console.log('trigger',enteries.length, enteries[0].isIntersecting, enteries[0].isVisible);

            if(!enteries[0].isIntersecting) {
                //debugger;
                console.log('reached to the end!');
                increment()
                // increment the page and add more items to the list
            }
            return ;
        }
        const observer = new IntersectionObserver(callBack,options);
        const target = document.querySelector('.lazy-class > div:last-child');

        observer.observe(target);
    }
    /* Do something here for lazy load setup */
    
    render(){
        return (
            <>
                {this.props.children}
            </>
        )
    }
}

export default LazyLoad;
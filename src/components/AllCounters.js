import React from 'react';
import Counter from '../containers/Counter';
import SimpleCounterContainer from '../containers/SimpleCounter';
import AdvancedCounterContainer from '../containers/AdvancedCounter';

const AllCounters = () =>{
    return (
        <div>
            {/*<Counter></Counter>*/}
            <SimpleCounterContainer></SimpleCounterContainer>
            <AdvancedCounterContainer></AdvancedCounterContainer>
        </div>
    )
}

export default AllCounters;
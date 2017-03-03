import React from 'react';
import Counter from '../containers/Counter';
import SimpleCounterControl from '../components/SimpleCounter';
import AdvancedCounterContainer from '../containers/AdvancedCounter';

const AllCounters = () =>{
    return (
        <div>
            <Counter></Counter>
            <SimpleCounterControl></SimpleCounterControl>
            <AdvancedCounterContainer></AdvancedCounterContainer>
        </div>
    )
}

export default AllCounters;
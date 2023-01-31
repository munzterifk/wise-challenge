import React, { useState } from 'react'
import {useQuery} from "@apollo/client";

import CircularIndeterminate from '../ui/CircularIndeterminate';
import Epoches from '../ui/Epoches';
import { GET_GRAPHS } from '../apollo/queries';

const Graphs = () => {

    const [startBlock, setStartBlock] = useState('');
    const {error, data, loading} = useQuery(GET_GRAPHS, {
        variables: { startBlock }
    });

    const handleOnChange = (event) => {
        const value = event.target.value;
        setStartBlock(value);
    }
    
    return (
        <> 
            <input type="text" onChange={handleOnChange}/>
            {loading && <CircularIndeterminate/>}
            {!loading && <Epoches data={data}/>}
        </>
    )
}

export default Graphs
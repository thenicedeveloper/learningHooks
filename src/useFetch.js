import React, {useState, useEffect} from 'react';


function useFetch(url, initialValue){
    const [result, setResult] = useState(initialValue)
    useEffect(() => {        
        fetch(`${url}`)
            .then(response => response.json())
            .then(json => setResult(json))

    }, [])
    return result;
}

export default useFetch;
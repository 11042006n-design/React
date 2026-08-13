import React, {useState,useEffect} from 'react';

const MyComponents=(props)=>{
    const [count,setCount]=useState(0);
    //const useMyFunc=()=>[1,()=>{console.log("++");}]
    //const [a,b]=useMyFunc();

    //console.log(a);
    //b();
    useEffect(()=>{
        document.title=`Значение ${count}`;
    });
    return (
        <div>
            <h1>{count}</h1>
            <button
                onClick={()=>{setCount(count+1);}}>
                Жми меня   
            </button>

        </div> 
    ); 

}

export default MyComponents;
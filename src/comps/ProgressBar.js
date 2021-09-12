import React, { useEffect } from 'react';
import useStorage from '../hooks/userStorage';
import {motion} from 'framer-motion';

const ProgressBar = ({file,setFile}) =>{
    const { progress,url} = useStorage(file);
    console.log(progress,url);

    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url,setFile])
    return(
        <motion.div className = "progress-bar" style={{width: progress + '%'}}
        initial={{width: 0}}
        animate={{width: progress + '%'}}
        ></motion.div>
    )
}

export default ProgressBar;
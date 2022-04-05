import { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/useVolunter';
import Volentiar from '../Volentiar/Volentiar';
import './Main.css'

const Main = () => {
    const [volunteers, setVolunteers] = useVolunteers();
    const [searchResult, setSearchResult] = useState([]);
    const [serText, setSerText] = useState('');

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>{
            const match = data.filter(v=>v.title.toLowerCase().includes(serText))
            setSearchResult(match)
        })
    },[serText])


    const handleInput = (event)=>{
        setSerText(event.target.value);
        
    }
    
    return (
        <div>
            <p>{searchResult.length}</p>
            <div style={{'margin' : '20px'}}>
                <input onChange={handleInput} type="text" placeholder='search here' />
            </div>
            <div className='vol-container'>
            {
                searchResult.map(volunteer=><Volentiar key={volunteer._id} volunteer={volunteer}></Volentiar>)
            }
            </div>
        </div>
    );
};

export default Main;
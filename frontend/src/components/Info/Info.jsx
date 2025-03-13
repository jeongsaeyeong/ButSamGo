import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Info = () => {
    const [info, setInfo] = useState([]);
    const navigation = useNavigate();

    useEffect(() => {
        fetch('http://ooooo0516.dothome.co.kr/backend/info.php')
            .then(response => response.json())
            .then(data => { setInfo(data); console.log(data) })
            .catch(error => console.error('Error fetching info:', error));
    }, []);

    const GoDetail = (postId) => {
        navigation(`/community/${postId}`);
    };

    return (
        <div className='Info_wrap container'>
            <div className="header">
                <h3>공지사항</h3>
            </div>
            <div className="list">
                {info.map((info) => (
                    <div key={info.id} onClick={()=>{GoDetail(info.id)}}>
                        <p className="title">{info.title}</p>
                        <p className="content">{info.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Info
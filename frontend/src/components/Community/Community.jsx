import React, { useEffect, useState } from 'react';
import Default from '../../assets/img/image/default.png';
import Write from '../../assets/img/icon/write.svg';
import { Link, useNavigate } from 'react-router-dom';

const Community = () => {
    const [tab, setTab] = useState('free');
    const [comm, setComm] = useState([]);

    const navigation = useNavigate();

    const GoDetail = (postId) => {
        navigation(`/community/${postId}`);
    };

    useEffect(() => {
        const boardId = tab === 'free' ? 3 : 4;
        fetch(`http://butsamgo.dothome.co.kr/backend/community.php?board_id=${boardId}`)
            .then(response => response.json())
            .then(data => {
                setComm(data);
                console.log(data);
            })
            .catch(error => console.error('Error fetching info:', error));
    }, [tab]);

    return (
        <div className='Community_wrap container'>
            <div className="tab">
                <h4 onClick={() => setTab('free')} className={tab === 'free' ? 'click' : ''}>자유게시판</h4>
                <h4 onClick={() => setTab('3th')} className={tab === '3th' ? 'click' : ''}>고3 게시판</h4>
            </div>
            <div className="article_wrap">
                {comm.length > 0 ? (
                    comm.map((post) => (
                        <div key={post.id} onClick={() => GoDetail(post.id)} className="article">
                            <div className="photo">
                                <img src={post.image_url ? post.image_url : Default} alt="" />
                            </div>
                            <div className='info'>
                                <div>
                                    <p className="title">{post.title}</p>
                                    <p className="content">{post.content}</p>
                                </div>
                                <p className="comment">댓글 {post.comment_count}개</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>게시글이 없습니다.</p>
                )}
            </div>
            <Link to='/write'><img src={Write} alt="" /></Link>
        </div>
    );
};

export default Community;

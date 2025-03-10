import React, { useState } from 'react'
import Default from '../../assets/img/image/default.png'
import Write from '../../assets/img/icon/write.svg'
import { Link, useNavigate } from 'react-router-dom'

const Community = () => {
    const [tab, setTab] = useState('free');

    const navigation = useNavigate();

    const GoDetail = () => {
        navigation('/community/1')
    }

    return (
        <div className='Community_wrap container'>
            <div className="tab">
                <h4 onClick={() => { setTab('free') }} className={tab === 'free' ? 'click' : ''}>자유게시판</h4>
                <h4 onClick={() => { setTab('2th') }} className={tab === '2th' ? 'click' : ''}>고2 게시판</h4>
            </div>
            <div className="article_wrap">
                <div onClick={() => { GoDetail() }} className="article">
                    <div className="photo">
                        <img src={Default} alt="" />
                    </div>
                    <div className='info'>
                        <div>
                            <p className="title">제목</p>
                            <p className="content">내용</p>
                        </div>
                        <p className="comment">댓글 1개</p>
                    </div>
                </div>
                <div className="article">
                    <div className="photo">
                        <img src={Default} alt="" />
                    </div>
                    <div className='info'>
                        <div>
                            <p className="title">제목</p>
                            <p className="content">내용</p>
                        </div>
                        <p className="comment">댓글 1개</p>
                    </div>
                </div>
                <div className="article">
                    <div className="photo">
                        <img src={Default} alt="" />
                    </div>
                    <div className='info'>
                        <div>
                            <p className="title">제목</p>
                            <p className="content">내용</p>
                        </div>
                        <p className="comment">댓글 1개</p>
                    </div>
                </div>
                <div className="article">
                    <div className="photo">
                        <img src={Default} alt="" />
                    </div>
                    <div className='info'>
                        <div>
                            <p className="title">제목</p>
                            <p className="content">내용</p>
                        </div>
                        <p className="comment">댓글 1개</p>
                    </div>
                </div>
                <div className="article">
                    <div className="photo">
                        <img src={Default} alt="" />
                    </div>
                    <div className='info'>
                        <div>
                            <p className="title">제목</p>
                            <p className="content">내용</p>
                        </div>
                        <p className="comment">댓글 1개</p>
                    </div>
                </div>
                <div className="article">
                    <div className="photo">
                        <img src={Default} alt="" />
                    </div>
                    <div className='info'>
                        <div>
                            <p className="title">제목</p>
                            <p className="content">내용</p>
                        </div>
                        <p className="comment">댓글 1개</p>
                    </div>
                </div>
                <div className="article">
                    <div className="photo">
                        <img src={Default} alt="" />
                    </div>
                    <div className='info'>
                        <div>
                            <p className="title">제목</p>
                            <p className="content">내용</p>
                        </div>
                        <p className="comment">댓글 1개</p>
                    </div>
                </div>
                <div className="article">
                    <div className="photo">
                        <img src={Default} alt="" />
                    </div>
                    <div className='info'>
                        <div>
                            <p className="title">제목</p>
                            <p className="content">내용</p>
                        </div>
                        <p className="comment">댓글 1개</p>
                    </div>
                </div>
                <div className="article">
                    <div className="photo">
                        <img src={Default} alt="" />
                    </div>
                    <div className='info'>
                        <div>
                            <p className="title">제목</p>
                            <p className="content">내용</p>
                        </div>
                        <p className="comment">댓글 1개</p>
                    </div>
                </div>

            </div>
            <Link to='/write'><img src={Write} alt="" /></Link>
        </div>
    )
}

export default Community
import React from 'react'
import { Link } from 'react-router-dom'
import Eat from '../../assets/img/icon/eat.svg'
import Right from '../../assets/img/icon/right.svg'
import Community from '../../assets/img/icon/community.svg'

const Main = () => {
    return (
        <div className='Main_wrap container'>
            <div className="top">
                <div className="left">
                    <p>n번째 벗</p>
                    <h1>김천사님,<br />반가워요!</h1>
                </div>
                <div className="right">
                    <Link to='/studentid'>학생증<br /> 확인하기</Link>
                </div>
            </div>
            <div className="bottom">
                <div className="eat_wrap">
                    <div className='eat_top'>
                        <div>
                            <h3>오늘의 급식</h3>
                            <img src={Eat} alt="" />
                        </div>
                        <Link to='/'>
                            <p>더보기</p>
                            <img className='go' src={Right} alt="" />
                        </Link>
                    </div>
                    <div className="eat_bottom">
                        <div className="eat">
                            <h4>3월 14일</h4>
                            <p>현미밥<br />맛있는 국<br />반찬 1<br />반찬 2<br />반찬3<br />후식<br /></p>
                        </div>
                        <div className="eat">
                            <h4>3월 14일</h4>
                            <p>현미밥<br />맛있는 국<br />반찬 1<br />반찬 2<br />반찬3<br />후식<br /></p>
                        </div>
                        <div className="eat">
                            <h4>3월 14일</h4>
                            <p>현미밥<br />맛있는 국<br />반찬 1<br />반찬 2<br />반찬3<br />후식<br /></p>
                        </div>
                    </div>
                </div>
                <div className="article_wrap">
                    <div className='article_top'>
                        <h3>인기 게시글</h3>
                        <img src={Community} alt="" />
                    </div>
                    <div className="article_bottom">
                        <div>
                            <p className="title">자유게시판</p>
                            <p className="content">들어갈 내용1</p>
                        </div>
                        <div>
                            <p className="title">자유게시판</p>
                            <p className="content">들어갈 내용1</p>
                        </div>
                        <div>
                            <p className="title">자유게시판</p>
                            <p className="content">들어갈 내용1</p>
                        </div>
                        <div>
                            <p className="title">자유게시판</p>
                            <p className="content">들어갈 내용1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
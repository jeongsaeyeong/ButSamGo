import React from 'react'
import Back from '../../assets/img/icon/back.svg'
import { useNavigate } from 'react-router-dom'
import Default from '../../assets/img/image/default.png'

const Detail = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='Detail_wrap container'>
            <div>
                <div className="header">
                    <button onClick={() => { onBack() }} className='back_btn'><img src={Back} alt="" /></button>
                    <h2 className="title">제목 들어가는 자리</h2>
                </div>
                <div className="article">
                    <div className="photo">
                        <img src={Default} alt="" />
                    </div>
                    <div className='data'>
                        <p>임시적으로 들어가는 내용입니다.</p>
                        <div className="btn_box">
                            <button className='modify'>수정</button>
                            <button className='delete'>삭제</button>
                        </div>
                    </div>
                    <div className="info">
                        <p className='writer'>김천사</p>
                        <p className='day'>2025.03.14</p>
                    </div>
                </div>
                <div className="comment_wrap">
                    <div className="top">
                        <p className="info">댓글1</p>
                        <div className="comment_list">
                            <div className="comment">
                                <p className="content">댓글이 들어가는 곳입니다.</p>
                                <p className="content">작성자</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <input type="text" placeholder='내용을 입력하세요.' />
                <button>댓글 달기</button>
            </div>
        </div>
    )
}

export default Detail
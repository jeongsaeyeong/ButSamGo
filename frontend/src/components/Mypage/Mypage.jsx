import React, { useEffect, useState } from 'react';
import Profile from '../../assets/img/icon/profile.svg';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
    const navigate = useNavigate();
    const userid = localStorage.getItem('userid');
    const [user, setUser] = useState(null);

    const onLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const fetchUserInfo = async () => {
        try {
            const response = await fetch(`http://butsamgo.dothome.co.kr/backend/get_user.php?userid=${userid}`);
            const data = await response.json();
            if (data.success) {
                setUser(data.user);
            } else {
                console.error("유저 정보를 가져오는 데 실패했습니다.");
            }
        } catch (error) {
            console.error("서버 요청 오류:", error);
        }
    };

    const deleteAccount = () => {
        if (window.confirm("정말로 회원 탈퇴하시겠습니까? 탈퇴하면 복구할 수 없습니다.")) {
            fetch('http://butsamgo.dothome.co.kr/backend/delete_user.php', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ user_id: userid }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        alert("회원 탈퇴가 완료되었습니다.");
                        localStorage.clear();
                        navigate('/');
                    } else {
                        alert(`탈퇴 실패: ${data.error}`);
                    }
                })
                .catch((error) => {
                    console.error("탈퇴 요청 오류:", error);
                    alert("서버 오류가 발생했습니다.");
                });
        }
    };

    useEffect(() => {
        if (userid) {
            fetchUserInfo();
        } else {
            alert('로그인이 필요합니다.');
            navigate('/');
        }
    }, [userid]);

    return (
        <div className='Mypage_wrap container'>
            <img src={Profile} alt="프로필 이미지" />
            {user ? (
                <>
                    <h1>안녕하세요, {user.name} 님!</h1>
                    {userid === "2" && (
                        <>
                            <button className='btn' onClick={() => navigate('/write')}>공지사항 작성</button>
                            <button className='btn' onClick={() => navigate('/write')}>일정 작성</button>
                            <button className='btn' onClick={() => navigate('/write_eat')}>급식 작성</button>
                        </>
                    )}
                    <button className='delete' onClick={deleteAccount}>회원 탈퇴</button>
                </>
            ) : (
                <p>사용자 정보를 불러오는 중...</p>
            )}
            <button onClick={onLogout}>로그아웃</button>
        </div>
    );
};

export default Mypage;

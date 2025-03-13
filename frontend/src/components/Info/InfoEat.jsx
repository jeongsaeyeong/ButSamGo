import React, { useState } from 'react';
import Back from '../../assets/img/icon/back.svg';
import { useNavigate } from 'react-router-dom';

const InfoEat = () => {
    const [scheduleDate, setScheduleDate] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const onSubmit = () => {
        if (!scheduleDate || !content.trim()) {
            alert("날짜와 급식 내용을 모두 입력해주세요!");
            return;
        }

        fetch('http://ooooo0516.dothome.co.kr/backend/add_meal.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                schedule_date: scheduleDate,
                content: content
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert('급식이 등록되었습니다!');
                    navigate(-1); // 이전 페이지로 이동
                } else {
                    console.error(data.error);
                    alert('급식 등록에 실패했습니다.');
                }
            })
            .catch((error) => {
                console.error("Error posting data:", error);
                alert("서버 오류가 발생했습니다.");
            });
    };

    const onBack = () => {
        navigate(-1);
    };

    return (
        <div className='InfoEat_Wrap container'>
            <div>
                <button onClick={onBack} className='back_btn'>
                    <img src={Back} alt="뒤로가기" />
                </button>

                <input
                    type="date"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="급식 메뉴를 작성해주세요!"
                ></textarea>

                <div>
                    <button onClick={onSubmit} className='write_btn'>
                        등록하기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InfoEat;

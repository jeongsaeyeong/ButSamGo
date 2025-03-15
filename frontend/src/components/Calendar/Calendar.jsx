import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
    const [schedules, setSchedules] = useState([]);
    const navigation = useNavigate();

    useEffect(() => {
        fetch('http://butsamgo.dothome.co.kr/backend/schedule.php')
            .then(response => response.json())
            .then(data => {
                const sortedData = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setSchedules(sortedData);
            })
            .catch(error => console.error('Error fetching schedules:', error));
    }, []);

    const GoDetail = (postId) => {
        navigation(`/community/${postId}`);
    };

    return (
        <div className="Calendar_wrap container">
            <div className="calendar_list">
                {schedules.length > 0 ? (
                    schedules.map((schedule, index) => {
                        const date = new Date(schedule.created_at);
                        const formattedDate = date.toLocaleDateString("ko-KR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        });

                        return (
                            <div
                                key={schedule.id}
                                className={`calendar ${index === 0 ? 'top' : ''}`} // 가장 최근 일정에 'top' 클래스 추가
                                onClick={() => { GoDetail(schedule.id) }}
                            >
                                <h3 className="title">{formattedDate}</h3>
                                <div className="content">{schedule.title}</div>
                            </div>
                        );
                    })
                ) : (
                    <p>일정이 없습니다.</p>
                )}
            </div>
        </div>
    );
};

export default Calendar;

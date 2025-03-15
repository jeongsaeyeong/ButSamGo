import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Eat from '../../assets/img/icon/eat.svg';
import Right from '../../assets/img/icon/right.svg';
import Community from '../../assets/img/icon/community.svg';

const Main = () => {
    const [user, setUser] = useState(null);
    const [meals, setMeals] = useState([]);
    const [popularPosts, setPopularPosts] = useState([]);
    const userid = localStorage.getItem('userid');
    const navigate = useNavigate();

    useEffect(() => {
        if (!userid) {
            navigate('/login');
        }

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

        fetchUserInfo();
    }, [userid]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('http://butsamgo.dothome.co.kr/backend/get_meals.php');
                const data = await response.json();
                if (data.success) {
                    setMeals(data.meals);
                } else {
                    console.error("급식 정보를 가져오는 데 실패했습니다.");
                }
            } catch (error) {
                console.error("서버 요청 오류:", error);
            }
        };

        fetchMeals();
    }, []);

    useEffect(() => {
        const fetchPopularPosts = async () => {
            try {
                const response = await fetch('http://butsamgo.dothome.co.kr/backend/get_popular_posts.php');
                const data = await response.json();
                if (data.success) {
                    setPopularPosts(data.posts);
                } else {
                    console.error("인기 게시글을 가져오는 데 실패했습니다.");
                }
            } catch (error) {
                console.error("서버 요청 오류:", error);
            }
        };

        fetchPopularPosts();
    }, []);

    const today = new Date().toISOString().split('T')[0];

    const GoDetail = (postId) => {
        navigate(`/community/${postId}`);
    };

    return (
        <div className='Main_wrap container'>
            <div className="top">
                <div className="left">
                    <p>{user ? `${user.id}번째 벗` : "로딩 중..."}</p>
                    <h1>
                        {user ? `${user.name}님,` : "사용자 정보를 불러오는 중..."}
                        <br />
                        반가워요!
                    </h1>
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
                        {meals.length > 0 ? (
                            meals.map((meal) => {
                                const isToday = meal.schedule_date === today;
                                return (
                                    <div key={meal.id} className={`eat ${!isToday ? 'not_today' : ''}`}>
                                        <h4>{new Date(meal.schedule_date).toLocaleDateString('ko-KR')}</h4>
                                        <p>
                                            {meal.content.split(',').map((item, index) => (
                                                <span key={index}>
                                                    {item.trim()}
                                                    <br />
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                );
                            })
                        ) : (
                            <p>등록된 급식이 없습니다.</p>
                        )}
                    </div>
                </div>

                <div className="article_wrap">
                    <div className='article_top'>
                        <h3>인기 게시글</h3>
                        <img src={Community} alt="" />
                    </div>
                    <div className="article_bottom">
                        {popularPosts.length > 0 ? (
                            popularPosts.map((post) => {
                                const boardName = post.board_name === 'Free Board' ? '자유게시판' :
                                    post.board_name === 'Senior Board' ? '고3 게시판' : post.board_name;

                                return (
                                    <div key={post.id} onClick={() => { GoDetail(post.id) }}>
                                        <p className="title">{boardName}</p>
                                        <p className="content">{post.title}</p>
                                    </div>
                                );
                            })
                        ) : (
                            <p>인기 게시글이 없습니다.</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Main;

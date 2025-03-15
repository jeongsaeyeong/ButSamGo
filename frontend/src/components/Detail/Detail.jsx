import React, { useEffect, useState } from 'react';
import Back from '../../assets/img/icon/back.svg';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const userId = localStorage.getItem('userid');
    console.log(userId)

    const onBack = () => {
        navigate(-1);
    };

    const GoWrite = (postId) => {
        navigate(`/write/${postId}`);
    };

    const fetchPostDetails = () => {
        fetch(`http://butsamgo.dothome.co.kr/backend/post_detail.php?id=${params.page}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setPost(data.post);
                    setComments(data.comments);
                    console.log('data', data)
                } else {
                    console.error(data.error);
                }
            })
            .catch((error) => console.error('Error fetching post detail:', error));
    };

    useEffect(() => {
        fetchPostDetails();
    }, [params.page]);

    const deletePost = () => {
        if (window.confirm("정말로 이 게시글을 삭제하시겠습니까?")) {
            fetch('http://butsamgo.dothome.co.kr/backend/delete_post.php', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ post_id: params.page })
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {
                        alert("게시글이 삭제되었습니다.");
                        navigate(-1);
                    } else {
                        console.error(data.error);
                        alert("게시글 삭제에 실패했습니다.");
                    }
                })
                .catch((error) => {
                    console.error("Error deleting post:", error);
                    alert("서버 오류가 발생했습니다.");
                });
        }
    };

    const addComment = () => {
        if (!newComment.trim()) {
            alert("댓글 내용을 입력하세요.");
            return;
        }

        fetch('http://butsamgo.dothome.co.kr/backend/add_comment.php', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                post_id: params.page,
                user_id: userId,
                content: newComment
            })
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setNewComment('');
                    fetchPostDetails();
                } else {
                    console.error(data.error);
                    alert("댓글 등록에 실패했습니다.");
                }
            })
            .catch((error) => {
                console.error("Error adding comment:", error);
                alert("서버 오류가 발생했습니다.");
            });
    };

    if (!post) {
        return <p>로딩 중...</p>;
    }

    return (
        <div className='Detail_wrap container'>
            <div>
                <div className="header">
                    <button onClick={onBack} className='back_btn'>
                        <img src={Back} alt="뒤로가기" />
                    </button>
                    <h2 className="title">{post.title}</h2>
                </div>
                <div className="article">
                    <div className="photo">
                        {post.image_url && <img src={post.image_url} alt="게시글 이미지" />}
                    </div>
                    <div className='data'>
                        <p>{post.content}</p>
                        <div className="btn_box">
                            {userId === String(post.user_id) && (
                                <>
                                    <button className='modify' onClick={() => GoWrite(params.page)}>수정</button>
                                    <button className='delete' onClick={deletePost}>삭제</button>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="info">
                        <p className='writer'>작성자</p>
                        <p className='day'>{new Date(post.created_at).toLocaleDateString('ko-KR')}</p>
                    </div>
                </div>
                <div className="comment_wrap">
                    <div className="top">
                        <p className="info">댓글 {comments.length}개</p>
                        <div className="comment_list">
                            {comments.map((comment, index) => (
                                <div key={index} className="comment">
                                    <p className="content">{comment.content}</p>
                                    <p className="content">{new Date(comment.created_at).toLocaleDateString('ko-KR')}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <input
                    type="text"
                    placeholder='내용을 입력하세요.'
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={addComment}>댓글 달기</button>
            </div>
        </div>
    );
};

export default Detail;

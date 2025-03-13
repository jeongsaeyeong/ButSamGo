import React, { useEffect, useState } from 'react';
import Back from '../../assets/img/icon/back.svg';
import { useNavigate, useParams } from 'react-router-dom';

const Write = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [boardId, setBoardId] = useState(3);
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState('');
    const [existingImage, setExistingImage] = useState('');
    const [scheduleDate, setScheduleDate] = useState('');
    const userId = localStorage.getItem('userid');
    const navigate = useNavigate();
    const params = useParams();

    const isEdit = !!params.id;
    const isAdmin = userId === "2"; 

    const onBack = () => {
        navigate(-1);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setFileName(file.name);
        }
    };

    const fetchPostDetails = () => {
        fetch(`http://ooooo0516.dothome.co.kr/backend/post_detail.php?id=${params.id}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setTitle(data.post.title);
                    setContent(data.post.content);
                    setBoardId(data.post.board_id);
                    setExistingImage(data.post.image_url);
                    setFileName(data.post.image_url ? data.post.image_url.split('/').pop() : '');
                    setScheduleDate(data.post.schedule_date || ''); // ✅ 날짜 설정
                }
            })
            .catch(error => console.error('Error fetching post:', error));
    };

    const onSubmit = () => {
        if (!title.trim() || !content.trim()) {
            alert("제목과 내용을 모두 입력해주세요!");
            return;
        }

        const formData = new FormData();
        formData.append("user_id", userId);
        formData.append("board_id", boardId);
        formData.append("title", title);
        formData.append("content", content);
        formData.append("existing_image", existingImage);
        if (boardId === 2) {
            formData.append("schedule_date", scheduleDate);
        }
        if (image) {
            formData.append("image", image);
        }

        const endpoint = isEdit 
            ? 'http://ooooo0516.dothome.co.kr/backend/update_post.php' 
            : 'http://ooooo0516.dothome.co.kr/backend/write_post.php';

        if (isEdit) {
            formData.append("post_id", params.id);
        }

        fetch(endpoint, {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(isEdit ? "게시글이 수정되었습니다." : "게시글이 등록되었습니다.");
                    navigate(-1);
                } else {
                    console.error(data.error);
                    alert(isEdit ? "게시글 수정에 실패했습니다." : "게시글 등록에 실패했습니다.");
                }
            })
            .catch(error => {
                console.error("Error posting data:", error);
                alert("서버 오류가 발생했습니다.");
            });
    };

    useEffect(() => {
        if (isEdit) {
            fetchPostDetails();
        }
    }, [params.id]);

    return (
        <div className='Write_wrap container'>
            <div>
                <button onClick={onBack} className='back_btn'>
                    <img src={Back} alt="뒤로가기" />
                </button>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    placeholder="제목을 입력해주세요"
                />

                <div className="box">
                    <input
                        type="file"
                        id="file-upload"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <label htmlFor="file-upload">
                        {fileName || "파일 선택하기"}
                    </label>

                    <select value={boardId} onChange={(e) => setBoardId(Number(e.target.value))}>
                        {isAdmin && <option value={1}>공지사항</option>}
                        {isAdmin && <option value={2}>일정</option>}
                        <option value={3}>자유게시판</option>
                        <option value={4}>고3 게시판</option>
                    </select>
                </div>

                {boardId === 2 && (
                    <input
                        type="date"
                        value={scheduleDate}
                        onChange={(e) => setScheduleDate(e.target.value)}
                    />
                )}

                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="내용을 입력해주세요"
                ></textarea>

                <div>
                    <button onClick={onSubmit} className='write_btn'>
                        {isEdit ? "수정하기" : "등록하기"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Write;

import React, { useState, useEffect } from 'react';
import Back from '../../assets/img/icon/back.svg';
import { useNavigate } from 'react-router-dom';
import Picture from '../../assets/img/icon/picture.svg';

const Student = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem('userid');
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState('');

    const onBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchStudentId = async () => {
            try {
                const response = await fetch(`http://ooooo0516.dothome.co.kr/backend/get_user.php?userid=${userId}`);
                const data = await response.json();
                if (data.success) {
                    setPreview(data.user.student_id_image);
                    setName(data.user.name);
                }
            } catch (error) {
                console.error('이미지 가져오기 오류:', error);
            }
        };

        fetchStudentId();
    }, [userId]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const uploadStudentId = () => {
        if (!image) {
            alert("학생증 이미지를 선택해주세요!");
            return;
        }

        const formData = new FormData();
        formData.append('user_id', userId);
        formData.append('student_id', image);

        fetch('http://ooooo0516.dothome.co.kr/backend/upload_student_id.php', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setPreview(data.image_url);
                    alert("학생증이 성공적으로 업로드되었습니다!");
                } else {
                    alert(`업로드 실패: ${data.error}`);
                }
            })
            .catch(error => {
                console.error('업로드 오류:', error);
                alert("서버 오류가 발생했습니다.");
            });
    };

    return (
        <div className='Student_wrap container'>
            <div>
                <button onClick={onBack} className='back_btn'>
                    <img src={Back} alt="뒤로가기" />
                </button>
                <div className="studentid">
                    <div className="photo">
                        {preview ? (
                            <img src={preview} alt="학생증 미리보기" />
                        ) : (
                            <img src={Picture} alt="기본 이미지" />
                        )}
                    </div>
                    <div className="name">{name}</div>
                    <div className="box">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                            id="upload"
                        />
                        <label htmlFor="upload">
                            <img src={Picture} alt="업로드 버튼" />
                        </label>
                    </div>
                </div>
                <button className='upload_btn' onClick={uploadStudentId}>
                    업로드
                </button>
            </div>
        </div>
    );
};

export default Student;

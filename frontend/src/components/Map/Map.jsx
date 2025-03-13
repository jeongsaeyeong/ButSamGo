import React from 'react'
import first from '../../assets/img/image/1st.png'
import second from '../../assets/img/image/2nd.png'
import third from '../../assets/img/image/3rd.png'
import forth from '../../assets/img/image/4th.png'
import fifth from '../../assets/img/image/5th.png'

const Map = () => {
    return (
        <div className='Map_wrap container'>
            <div className="list_wrap">
                <div>
                    <h3>1층 지도</h3>
                    <div className='map'><img src={first} alt="" /></div>
                </div>
                <div>
                    <h3>2층 지도</h3>
                    <div className='map'><img src={second} alt="" /></div>
                </div>
                <div>
                    <h3>3층 지도</h3>
                    <div className='map'><img src={third} alt="" /></div>
                </div>
                <div>
                    <h3>4층 지도</h3>
                    <div className='map'><img src={forth} alt="" /></div>
                </div>
                <div>
                    <h3>5층 지도</h3>
                    <div className='map'><img src={fifth} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Map
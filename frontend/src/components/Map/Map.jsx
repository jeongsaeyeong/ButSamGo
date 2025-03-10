import React from 'react'

const Map = () => {
    return (
        <div className='Map_wrap container'>
            <div className="list_wrap">
                <div>
                    <h3>전체 지도</h3>
                    <div className='map'></div>
                </div>
                <div>
                    <h3>본관 지도</h3>
                    <div className='map'></div>
                </div>
                <div>
                    <h3>별관 지도</h3>
                    <div className='map'></div>
                </div>
            </div>
        </div>
    )
}

export default Map
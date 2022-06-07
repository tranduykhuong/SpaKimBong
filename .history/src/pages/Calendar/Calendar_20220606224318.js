import React from 'react';
import './calendar.scss'

const Calendar = () => {
    return (
        <div>
            <div className='container-calendar'>
                <div className='container-bg-calendar'>
                    <div className='calendar'>
                        <div className='calendar-content'>
                            <h3>THỜI GIAN HOẠT ĐỘNG</h3>
                        </div>
                        
                        <div className='calendar-boxs'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendar;

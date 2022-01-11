import React, { useRef, useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Schedule.scss';
import { formatDate } from '../../util/formatter';
import calendarIcon from '../../icons/calendar.svg';

export const Schedule = ({onChange}) => {
    const [value, setValue] = useState(new Date());
    const [openCalendar, setOpenCalendar] = useState(false);
    const wrapperRef = useRef(null);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+ 2);
    useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setOpenCalendar(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [wrapperRef]);
    const handleOnChange = value => {
        setValue(value);
        onChange(value);
    }
    return(
        <div className='rc-calendar' ref={wrapperRef}>
            <div>{'Fecha'}</div>
            <div onClick={() => setOpenCalendar(true)} className='rc-c-datetext'>
                <img src={calendarIcon} alt='calendar' className='rc-c-calendaricon'/>
                {`${formatDate(value)}`}
            </div>
            <Calendar onChange={(value) => handleOnChange(value)} value={value} maxDate={tomorrow} className={`${openCalendar ? '' : 'hidden'}`}/>
        </div>
    );
}
export default Schedule;
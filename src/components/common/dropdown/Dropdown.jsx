import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import useFilter from '../../../hooks/useFilter';
import './Dropdown.scss';

const Dropdown = ({options, onSelect, placeholder}, ref) => {
    const [selection, setSelection] = useState(undefined);
    const [arreyFiltered, setArrayFiltered] = useFilter(options, 'name');
    const [openDropDown, setOpenDropdown] = useState(false);
    const wrapperRef = useRef(null);
    const handleOnchange = (e) => {
        setArrayFiltered(e.target.value);
        setSelection(e.target.value);
    }
    const handleOnselect = (item) => {
        onSelect(item);
        setSelection(item);
        setOpenDropdown(false);
    }
    useEffect(() => {
		function handleClickOutside(event) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setOpenDropdown(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [wrapperRef]);
    useImperativeHandle(ref, () => ({
        resetSelection: () =>{
            setSelection('');
        }
    }),[]);
    return(
        <div className='dropdown-container' ref={wrapperRef}>
            <input 
                type={'text'} 
                value={selection && selection.name} 
                onChange={(e) => handleOnchange(e)}
                placeholder={placeholder}
                className='ddc-input'
                onClick={() => setOpenDropdown(true)}
            />
            <div className={`ddc-options ${openDropDown ? '': 'hidden'}`}>
                {arreyFiltered.map(item => (
                    <Option
                        name={item.name}
                        value={item}
                        onSelect={handleOnselect}
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    );
}

const Option = ({name, value, onSelect}) => {
    return(
        <div onClick={() => onSelect(value)} className='option-container'>
            <div className='oc-text'>{name}</div>
        </div>
    );
}

export default forwardRef(Dropdown);
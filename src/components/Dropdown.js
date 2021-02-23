import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyCLick = (event) => {
            if(ref.current && ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        };
        document.body.addEventListener('click', onBodyCLick);

        return () => {
            document.body.removeEventListener('click', onBodyCLick);
        };
}, []);

    const renderedOptions = options.map((option) => {
        if(option == selected){
            return null;
        }
        return(
            <div key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });
    return <div ref={ref} className="ui form">
                <div className="field">
                    <label className="label">{label}</label>
                    <div className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    onClick={() => setOpen(!open)}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
}

export default Dropdown;
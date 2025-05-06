import React from 'react';
function Label(props) {
    const { children, icon, color} = props;
    return ( <>
        <label className={"text-md p-2 rounded-br-lg font-bold flex gap-3 items-center "  + color}>
            {icon}
            <span>{children}</span> 
        </label>
    </> );
}

export default Label;
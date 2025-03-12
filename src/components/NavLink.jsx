import React from 'react';
function NavLink(props) {
    const {children, href, ...rest} = props;
    return ( 
        <li className='py-2 text-lg font-medium'> 
            <a href={href} {...rest}>{children}</a>
        </li>
    );
}

export default NavLink;
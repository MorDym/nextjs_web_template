// import React from 'react';
import type { MenuLinkProps } from '../data/type';


function MenuLink({id, href, name, className}: MenuLinkProps) {
   
    return(
            <div key={id} className={className}>
                <a href={href}>{name}</a>
            </div>
        );
}

export default MenuLink
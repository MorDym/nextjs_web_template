// import React from 'react';
import type { MenuLinkProps } from '../data/type';


function MenuLink({id, href, name, className}: MenuLinkProps) {
   
    return(
                <a key={id} href={href} className={className}>{name}</a>
            
        );
}

export default MenuLink
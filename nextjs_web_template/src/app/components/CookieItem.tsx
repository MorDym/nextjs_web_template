import React from 'react'
import SwitchButton from './ui/SwitchButton';
import type { CookieItemType } from '../data/type';

function CookieItem({id, description, nameVis, cookie, onChange}: CookieItemType) {
    return (
        <div key={id} className='flex justify-between mt-2'>
            <h4>{nameVis}</h4>
            <p>{description}</p>

            <SwitchButton
                disabled={cookie.required}
                checked={cookie.enable}
                onChange={onChange}
            />
        </div>
    )
}

export default CookieItem
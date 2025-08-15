import React, { useEffect, useState } from 'react'
import { getCookie, setCookiesFunc } from '../functions'
import Button from './ui/Button';
import { cookiesData } from '../data/data';
import SwitchButton from './ui/SwitchButton';
import CookieItem from './CookieItem';
import Modal from './Modal';

function CookieBar() {

    const [isCookieAllow, setIsCookieAllow] = useState(false);
    const [advancedSettings, setAdvancedSettings] = useState(false);
    const [cookies, setCookies] = useState(cookiesData);


    useEffect(() => {
        const interval = setInterval(() => {
            if (getCookie("web_cookie")) {
                setIsCookieAllow(true);
                setAdvancedSettings(false);
                clearInterval(interval);
            }
        }, 500);




        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const allowed = getCookie("web_cookie");
            if (!allowed) setIsCookieAllow(false);
        }, 1000); // kontrola každou 1s

        return () => clearInterval(interval);
    }, []);

    const showAdvacedSettings = () => {
        setAdvancedSettings(true);
    };

    return (
        <div>
            {isCookieAllow ?
                null
                :
                <Modal isOpen={!isCookieAllow} onClose={() => setIsCookieAllow(false)} title="Povolíte nám Cookies?">


                        <p>Cookies - bohužel nutnost, bez kterých Vás na náš web nemůžeme pustit.</p>
                    <div className={advancedSettings ? "hidden" : "flex gap-5 justify-center items-center p-4"}>
                        <Button onClick={showAdvacedSettings}>Pokročilá nastavení</Button>
                        <Button onClick={() => {
                            cookies.forEach(cookie => setCookiesFunc(cookie.name, cookie.value, cookie.expiration, cookie.sameSite));
                        }}>Povolit WebCookie</Button>
                    </div >
                    {advancedSettings && (
                        <div className="flex flex-col justify-center items-center p-4">
                            <div className=''>
                                {cookies.map((cookie) => {
                                    console.log(cookie.enable)
                                    const { id, description, nameVis } = cookie;
                                    return (
                                        <div key={id} className='flex justify-between mt-2'>
                                            { /*  <CookieItem id={id} description={description} nameVis={nameVis} onChange={(checked) => {
                                                 setCookies(prevCookies =>
                                                     prevCookies.map(c =>
                                                         c.id === cookie.id ? { ...c, enable: checked } : c
                                                     )
                                                 );
                                             }} />*/}
                                            <h4>{nameVis}</h4>
                                            <p>{description}</p>

                                            <SwitchButton
                                                disabled={cookie.required}
                                                checked={cookie.enable}
                                                onChange={(checked) => {
                                                    setCookies(prevCookies =>
                                                        prevCookies.map(c =>
                                                            c.id === cookie.id ? { ...c, enable: checked } : c
                                                        )
                                                    );
                                                }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className='flex gap-5 mt-5'>
                                <Button onClick={() => setAdvancedSettings(false)}>Zpět</Button>
                                <Button onClick={() => {
                                    cookies.forEach(cookie => {
                                        if (!cookie.enable) return; setCookiesFunc(cookie.name, cookie.value, cookie.expiration, cookie.sameSite);

                                    });
                                    setIsCookieAllow(true);
                                }}>Povolit vybrané</Button> {/*dodělat vybrane*/}
                                <Button onClick={() => {
                                    cookies.forEach(cookie => setCookiesFunc(cookie.name, cookie.value, cookie.expiration, cookie.sameSite));
                                }}>Povolit vše</Button>
                            </div>
                        </div>
                    )}
                </Modal>

            }

        </div>

    )
}

export default CookieBar
export function getCookie(cookieName: String) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cookieName}=`);
    return parts.length === 2
        ? parts.pop()?.split(';').shift() ?? null
        : null;
};

export function setCookiesFunc(name: string, value: string, expiration: number, sameSite: string) {
    document.cookie = `${name}=${value}; max-age=${expiration}; path=/; SameSite=${sameSite}`;
;
};
export function deleteCookiesFunc(name: string, value: string, sameSite: string) {
    document.cookie = `${name}=${value}; max-age=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=${sameSite}`;
;
};
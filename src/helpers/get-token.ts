export const getTokenFromLocalStorage = () => {
    const userData = localStorage.getItem('userData');
    let token: string = '';
    if (userData) {
        token = JSON.parse(userData).token;
    }
    return token;
}
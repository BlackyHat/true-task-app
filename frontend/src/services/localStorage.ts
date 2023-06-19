export const getTokenLocalStorage = () => {
  const data = localStorage.getItem('user_token');
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const saveTokenLocalStorage = (token: string) => {
  return localStorage.setItem('user_token', JSON.stringify(token));
};

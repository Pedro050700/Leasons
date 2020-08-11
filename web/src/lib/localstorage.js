export const getProfile = () => {
  return JSON.parse(localStorage.getItem('@licoes-aprendidas'));
};

export const deleteProfile = () => {
  return JSON.parse(localStorage.removeItem('@licoes-aprendidas'));
};



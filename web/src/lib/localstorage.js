export const getProfile = () => {
  return JSON.parse(localStorage.getItem('@licoes-aprendidas'));
};

export const deleteProfile = () => {
  return JSON.parse(localStorage.removeItem('@licoes-aprendidas'));
};

export const addItem = user => {
  const userProfile = JSON.parse(localStorage.getItem('@licoes-aprendidas'));

  JSON.parse(
    localStorage.setItem('@licoes-aprendidas', {
      user,
      session: userProfile.session,
    })
  );
};

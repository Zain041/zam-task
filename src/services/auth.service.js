import API from './auth-header'

const register = (username, email, password) => {
  return API.post("signup", {
    username,
    email,
    password,
  });
};

const login = async (email, password) => {
  const {data} = await API
    .post("login", {
      email,
      password,
    })
    const {token } = data
    console.log(token)
      if (token) {
        localStorage.setItem("user", JSON.stringify(data));
      }

      return data;
    
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;

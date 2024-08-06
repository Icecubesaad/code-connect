import api from '../utils/axiosSetup';
interface payload{
  email:string,
  password:string
}
const register = async({email,password}:payload)=>{
  try {
    const response = await api.post('/api/register', { email, password });
  } catch (error) {
    console.error('Error logging in:', error);
  }
}
const login = async ({email, password}:payload) => {
  try {
    const response = await api.post('/api/login', { email, password });
  } catch (error) {
    console.error('Error logging in:', error);
  }
};
const authorize = async()=>{
  try {
    const response = await api.post('/api/authorize');
  } catch (error) {
    console.error('Error logging in:', error);
  }
}
export default {
    login,
    register,
    authorize
};

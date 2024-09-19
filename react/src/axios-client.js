import axios from 'axios'

const axiosClient = axios.create({
	baseURL: import.meta.env.API_BASE_URL
})

axiosClient.interceptors.request.use((config) => {
	const token = localStorage.getItem('ACCESS_TOKEN')
	config.headers.Authorization = `Bareer `
})

export default axiosClient;
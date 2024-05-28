import axios from 'axios'
export default defineNuxtPlugin((nuxtApp) => {
    const api: any = axios.create()
    
    const config: any = useRuntimeConfig()

    api.defaults.headers.common['Content-Type'] = 'application/json'
    api.defaults.baseURL = config.public.API

    console.log(config.public.API);
    api.interceptors.request.use(async function (config) {
        // Do something before request is sent

        const token: any = await useCookie('token')
        config.headers['Authorization'] = 'Bearer ' + token.value
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

    return {
        provide: {
            axios: api
        }
    }
})
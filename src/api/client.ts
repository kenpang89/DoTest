import axios from 'axios'
import store from '@/store'
const protocol = 'http'
const host = 'localhost'
const port = '3000'
axios.defaults.baseURL = `${protocol}://${host}:${port}`
axios.defaults.headers.post['Content-Type'] = 'application/json'

const authHeader = () => ({
  Authorization: `${store.state.auth.token}`
})

const client = async (params : any) => {
  const authRequired = typeof params.authRequired === 'undefined' || params.authRequired
  return axios({
    method: params.method,
    url: params.url,
    headers: authRequired ? authHeader() : {},
    data: typeof params.data !== 'undefined' ? params.data : {},
    params: typeof params.params !== 'undefined' ? params.params : {}
  })
}

export default client
import axios from 'axios'
import apis from './apis'

axios.defaults.baseURL = 'http://qyapi.rqwork.ruqimobility.com';
axios.defaults.headers.common['Authorization'] = '';
axios.defaults.headers.post['Content-Type'] = 'application/json';

let apiConfs = [apis]

let requestFunc = function (parms, requestConfig = {}) {
  return new Promise((resolve, reject) => {
    let reqConfig = {
      method: requestConfig.method || 'post',
      url: requestConfig.url,
      withCredentials: true,
      headers: requestConfig.header || {},
      data: {},
      params: {}
    }

    if (['post', 'put', 'patch'].includes(String(requestConfig.method).toLocaleLowerCase())) {
      reqConfig.data = parms
    } else {
      reqConfig.params = parms
    }

    let reso = {
      code: 0,
      msg: '',
      data: {}
    }

    axios(reqConfig)
      .then((res) => {
        if (res.code == 200) {
          reso.data = res.data || {}
        } else {
          reso.code = res.code
          reso.msg = res.msg
        }
        resolve(reso)
      }, (rej) => {
        reso.code = -1
        reso.msg = rej
        resolve(reso)
      })
  });
}

let apiFuns = {}

apiConfs.map(item => {
  for (let key in item) {
    apiFuns[key] = async function (parms) {
      return await requestFunc(parms, item[key])
    }
  }
})

export default apiFuns
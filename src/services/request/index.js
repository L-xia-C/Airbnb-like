import axios from "axios";
import {BASE_URL,TIMEOUT} from "./config"
class HYRequest{
    constructor(baseURL,timeOut){
        this.instance=axios.create({
            baseURL,
            timeOut
        })
        this.instance.interceptors.response.use((res)=>{
            return res.data
        },(err)=>{
            return err
        })  
    }
    request(config){
        return this.instance.request(config)
    }
    get(config){
        return this.request({...config,method:"get"})
    }
    post(config){
        return this.request({...config,method:"post"})
    }
}
const instance = new HYRequest(BASE_URL,TIMEOUT);
export default instance;
import axios from "axios";


var baseUrl="http://127.0.0.1:8000/api/property/"

export async function propertyCreateApi(data){

    let headers={
        "Content-Type":"multipart/form-data"
    }

    return await axios.post(baseUrl,data,{headers})
}


export async function propertyListApi(){

    return await axios.get(baseUrl)

}


export async function propertyDeleteApi(id){

    return await axios.delete(baseUrl+id+"/")
}


export async function propertyDetailApi(id){
    return await axios.get(baseUrl+id+"/")

}
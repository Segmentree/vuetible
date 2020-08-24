export default class Model {
    fetchResponse(fetch:any, word:any){
        return fetch(`https://api.openweathermap.org/data/2.5/search?code=${word},us&appid=YOURAPICODE`).then((response:any) => response.json()).then((data:any) => data)
    }
}
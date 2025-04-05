import hyRequest from "..";
export function getHomeGoodPriceData(){
    return hyRequest.get({
        url:"/home/goodprice"
    })
}

export function getHomeHighScore(){
    return hyRequest.get({
        url:"/home/highscore"
    })
}

export function getDiscount(){
    return hyRequest.get({
        url:"/home/discount"
    })
}

export function getHotDest(){
    return hyRequest.get({
        url:"/home/hotrecommenddest"
    })
}
export function getLongfor(){
    return hyRequest.get({
        url:"/home/longfor"
    })
}
export function getHomeplus(){
    return hyRequest.get({
        url:"/home/plus"
    })
}
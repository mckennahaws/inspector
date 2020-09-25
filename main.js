document.querySelector('header > h1').innerText= "Inspector Clouseau"
document.querySelector('header > h2').innerText= "Private Investigator"

function reDisplay(){
    let offset = `Window is offset ${window.screenX} from the left edge and ${window.screenY} pixels from the top`
    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels high.`
    let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset

}


let windowURL = `The URL is ${document.URL}`

let windowUpdate = `The last update was ${document.lastModified}`
let bodyTitle= `The document title is ${document.title}` 
let myDocument = document.querySelector('#myDocument').innerText = bodyTitle + '\n' + windowUpdate + '\n' + windowURL

function inputChange(event) {
  
  const xhr = new XMLHttpRequest()
  
  xhr.open('POST', '')
  xhr.onload = (event) =>{
    if (xhr.status != 200) {
        return xhr.statusText
    }
    showCandidate(xhr.response)
  }
}

function showCandidadate(Json) {
  console.log(json)
}
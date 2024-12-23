window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount()
})


const functionApiUrl = 'https://getresumecounters1.azurewebsites.net/api/GetResumeCounters1?code=pi3CD6boZVw310e_H2LI9ITuaf9aEXoAwP_WqGXvzeH_AzFu7yHHLw%3D%3D'
const localFunctionApi ="http://localhost:7071/api/GetResumeCounter";

const getVisitCount =() => {
  let count = 30;
  fetch(functionApiUrl).then(response =>{
    return response.json()
  }).then(response =>{
      console. log("Website called function API.");
      count = response.count;
      document.getElementById("counter").innerText = count;
  }).catch(function(error){
    console.log(error);
  });
  return count;
}
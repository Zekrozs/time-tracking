'use strict'
let category = document.querySelectorAll('.category')
let period = document.querySelectorAll('.period')
let previousPeriod = document.querySelectorAll('.previous-period')
let timeFrame = document.querySelectorAll('.time-frame')
let data
let arr


async function getData(){
    try{
        data = await fetch(`https://zekrozs.github.io/time-tracking/data.json`)
        if (data.ok){
            arr = await data.json()
        
        }
        else {alert(`${data.status} we have an error`)}
    } catch{console.log(`something went wrong`)}
}

function dataOnLoad(){
    arr.forEach((item,index) => {
        if(category[index]){
            category[index].textContent = item['title']
        }
         period[index].textContent = `${item['timeframes']['daily']['current']}hrs`
         previousPeriod[index].textContent = `Yesterday - ${item['timeframes']['daily']['previous']}hrs`
         
         timeFrame[0].classList.add('active')
    })}

getData().then(result => dataOnLoad())

let labels = {
                daily: 'Yesterday',
                weekly: 'last week',
                monthly: 'last month'
            }
            
            let populate = function(e){
             if (arr){
                timeFrame.forEach(f => f.classList.remove('active'))
                e.target.classList.add('active')
                let view = e.target.dataset.view
                  arr.forEach((item, index) =>{
                  if (period[index]){
                  period[index].textContent = `${item['timeframes'][view]['current']}hrs` 
                  previousPeriod[index].textContent = `${labels[view]} - ${item['timeframes'][view]['previous']}hrs`
            }
          } )  
        }
        else{alert(`and error occured. please wait before clicking`)}
        }
        

    timeFrame.forEach((frame) => {

      {frame.addEventListener('click', populate )}
        
 
})

















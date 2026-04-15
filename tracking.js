'use strict'
let category = document.querySelectorAll('.category')
let period = document.querySelectorAll('.period')
let previousPeriod = document.querySelectorAll('.previous-period')
let timeFrame = document.querySelectorAll('.time-frame')
let data
let arr


// each function should do one thing and one thing only

// break long funtions into smaller ones

// DRY your code like when you did with view and e.target and make it dynamic if possible

// use arrays and objects to make thing dynamic and better integrated to translate keys into values in your code

// always check if items or fetch succexseded before running the code depending on the promise

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
    if (arr){timeFrame[0].classList.add('active')
    arr.forEach((item,index) => {
        if(category[index]){
            category[index].textContent = item['title']
        }
         period[index].textContent = `${item['timeframes']['daily']['current']}hrs`
         previousPeriod[index].textContent = `Yesterday - ${item['timeframes']['daily']['previous']}hrs`
         
        
    })}} 

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

















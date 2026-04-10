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
            
            function populate(){

    arr.forEach((item,index) => {
        if(category[index]){
            category[index].textContent = item['title']
        }
    })

    timeFrame.forEach((frame,index) => {
        if(index == 0){frame.addEventListener('click', function(){
          document.querySelector(`.daily`).classList.add('active')
           document.querySelector(`.weekly`).classList.remove('active')
            document.querySelector(`.monthly`).classList.remove('active')
          arr.forEach((item, index) =>{
            if (period[index]){
                period[index].textContent = `${item['timeframes']['daily']['current']}hrs`
                previousPeriod[index].textContent = `Yesterday - ${item['timeframes']['daily']['previous']}hrs`
            }
          } )  
        })}
        
   else if(index == 1){
    frame.addEventListener('click', function(){
        document.querySelector(`.daily`).classList.remove('active')
        document.querySelector(`.weekly`).classList.add('active')
          document.querySelector(`.monthly`).classList.remove('active')
        arr.forEach((item, index) => {
            if(period[index])
                {period[index].textContent = `${item['timeframes']['weekly']['current']}hrs`
                previousPeriod[index].textContent = `Last week - ${item['timeframes']['weekly']['previous']}hrs`
            }
            
        })
    })
   }
else if(index == 2){
    frame.addEventListener('click', function(){
          document.querySelector(`.daily`).classList.remove('active')
           document.querySelector(`.weekly`).classList.remove('active')
            document.querySelector(`.monthly`).classList.add('active')
        arr.forEach((item, index) => {
            if(period[index]){
                period[index].textContent = `${item['timeframes']['monthly']['current']}hrs`
                    previousPeriod[index].textContent = `Last Month - ${item['timeframes']['monthly']['previous']}hrs`
            }
        })
    })
}    
})

}
populate()
        }
        else {console.log(`${data.status} we have an error`)}
    } catch{console.log(`something went wrong`)}
}



getData()









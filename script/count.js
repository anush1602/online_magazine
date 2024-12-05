let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let count = document.querySelector('.count')

plus.forEach((item, num)=>{
    item.addEventlistener('click', ()=>{
        count[num].value = parseInt(count[num].value) + 1
    })
    
})
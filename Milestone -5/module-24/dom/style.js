console.log("hello style.js")

const sections = document.querySelectorAll('section')
for(const section of sections){
    section.style.border = '2px solid black'
    section.style.marginBottom='5px'
    section.style.borderRadius = '5px'
    section.style.margin=' 5px 5px'
    section.style.padding= '10px'
    section.style.backgroundColor ='lightgray'
}

// const fruits = document.getElementById('fruits-container')
// fruits.style.backgroundColor='yellow'

const fruits = document.getElementById('fruits-container')
fruits.classList.add('text-center','large-text')
fruits.classList.remove('text-center')
document.get

let names=['ahmed','saif','mohamed','nour','mazen','ali']
let ages=['20 years old' ,'19 years old','20 years old','17 years old','15 years old','20 years old']
let container = document.createElement('div')
document.body.appendChild(container)
container.style.textAlign = 'center'
container.style.display="flex"
container.style.flexWrap="wrap"
document.body.style.background='green'


function element(names,ages){

    // elements
    let card = document.createElement('div')
    let title = document.createElement('h2')
    let age = document.createElement('p')
    let img = document.createElement('img')
    
    // content
    let head = document.createTextNode(names)
    let ageContent = document.createTextNode(ages)
    img.src='img.1.webp'
    title.appendChild(head)
    age.appendChild(ageContent)



    card.appendChild(title)
    card.appendChild(age)
    card.appendChild(img)
    container.appendChild(card)
    card.style.width='180px'
    card.style.borderRadius='10px'
    card.style.background=' rgba(255, 255, 255, 0.708)'
    card.style.padding='10px'
    card.style.margin='2px'
    card.style.color= 'green'
    card.style.flexGrow="1"
    title.style.textTransform='capitalize'
    img.style.width= '100%'
    img.style.borderRadius='10px'

}
for (let i = 0; i < 5 ; i++) {
    element(names[i],ages[i])
    
}
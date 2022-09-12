// Query selector (All)
console.log('----------------Query selector (All)----')
const paras = document.querySelectorAll("p")
const Errors = document.querySelectorAll(".Error")

paras.forEach(pars => {console.log(pars)})
Errors.forEach(errs => {console.log(errs)})

// query by elemt's id
console.log('----------------query by elemts id----')
const id = document.getElementById("head")
console.log(id)

// query by the class name
console.log('----------------query by class name----')
const classname = document.getElementsByClassName(".table")
console.log(classname)

// query by name-tag
console.log('----------------query by tag name----')
const tagname = document.getElementsByTagName("p1")
console.log(tagname)

// changing content inside element
console.log('---------------changing content inside element-----')
const para1 = document.querySelector('p')
console.log(para1.innerText)
para1.innerText = " Hey yo"

// changing content inside element
console.log('---------------changing content inside elements-----')
const paras1 = document.querySelectorAll('p')
paras1.forEach(p1 => {
    console.log(p1.innerText)
    p1.innerText += " added"
})

// changing content (HTML) inside element
console.log('---------------changing content (HTML) inside element-----')
const content = document.querySelector('div')
console.log(content.innerHTML)
content.innerHTML += '<h2>This is the new headline</h2>'

const people = ['ali', 'abas', 'boogh' ]

people.forEach(person => {content.innerHTML += `<p>${person}</p>`})

// get and set the elements
console.log('---------------get and set the elements-----')
const link = document.querySelector('a')
if(link){
    console.log('Yes')
}else{
    console.log('No')
}
console.log(link.getAttribute('href'))
link.setAttribute('href', 'https://www.youtube.com/')
link.innerText = 'YouTube'

const mssg = document.querySelector('p')
console.log(mssg.getAttribute('class'))
mssg.setAttribute('class', 'S')
mssg.setAttribute('style', 'color: green')

// changing the appearance of elements
const tds = document.querySelectorAll('td')
tds.forEach(td => {
    if(td.textContent.includes('blue')){
        td.classList.add('blue')
    }else if(td.textContent.includes('red')){
        td.classList.add('red')
    }
})
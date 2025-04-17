let table = document.querySelector('.tableProject')
let input = document.querySelector('.informationInput')
let inputDescription = document.querySelector('.descriptionInput')
let inputTechnology = document.querySelector('.technologyInput')
let index = 0



const addProject = () => {
   const newProjectRow = document.createElement('tr')
//    newRow.classList.add('newRow', `row-${index++}`)
   const data = document.createElement('td')
   data.innerText = input.value
   
   table.appendChild(newProjectRow)
   newProjectRow.appendChild(data)
   input.value = ''

   addDiscription(newProjectRow)
   addTechnology(newProjectRow)

}

const addDiscription = (row) => {

   const newDescriptionData = document.createElement('td')
   row.appendChild(newDescriptionData)
   newDescriptionData.innerText = inputDescription.value
   inputDescription.value = ''


}

const addTechnology = (row) => {

    const newDescriptionData = document.createElement('td')
    row.appendChild(newDescriptionData)
    newDescriptionData.innerText = inputTechnology.value
    inputTechnology.value =''

}




const row = document.querySelector('.newRow')
const tableProject = document.querySelector('.tableProject')




const deleteProject = () => {
    const tbody = tableProject.querySelector('tbody')
const lastRow = tableProject.querySelector('tbody tr.newRow:last-of-type')
    
   if(lastRow) {


    tbody.removeChild(lastRow)
   }

}
class Students{
    constructor(name, noteOne, noteTwo, noteThree, finalNote, randomCode){
        this.name = name
        this.noteOne = noteOne
        this.noteTwo = noteTwo
        this.noteThree = noteThree
        this.finalNote = finalNote
        this.randomCode = randomCode
    }
}

class UI{
    addStudent({ name, noteOne, noteTwo, noteThree, finalNote, randomCode }){
        return`
            <table>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Note 1</th>
                    <th>Note 2</th>
                    <th>Note 3</th>
                    <th>Final Note</th>
                </tr>
                <tr>
                    <td>${randomCode}</td>
                    <td>${name}</td>
                    <td>${noteOne}</td>
                    <td>${noteTwo}</td>
                    <td>${noteThree}</td>
                    <td>${finalNote}</td>
                </tr>
            </table>
        `
    }

    calculateFinalGrade(noteOne, noteTwo, noteThree){
        const totalSumOfGrades = parseFloat(noteOne) + parseFloat(noteTwo) + parseFloat(noteThree)

        const finalNote = totalSumOfGrades/3

        return finalNote.toFixed(1)
    }

    randomCode() {
        return Math.floor(Math.random() * (1000 - 100)) + 100
    }
}

window.form.addEventListener('submit', (e) => {

    const name = document.getElementById('name').value
    const noteOne = document.getElementById('noteOne').value
    const noteTwo = document.getElementById('noteTwo').value
    const noteThree = document.getElementById('noteThree').value
     
    window.form.reset()

    if(name === '' || noteOne === '' || noteTwo === '' || noteThree === ''){
        e.preventDefault()
       return
    }

    const ui = new UI()

    const randomCode = ui.randomCode()

    const finalNote = ui.calculateFinalGrade(noteOne, noteTwo, noteThree)

    const students = new Students(name, noteOne, noteTwo, noteThree, finalNote, randomCode)

    const containerUi = ui.addStudent(students)
    const tableContainer = document.getElementById('table_container')
    const element = document.createElement('div')
    element.innerHTML = containerUi

    tableContainer.appendChild(element)

    e.preventDefault()
    
})
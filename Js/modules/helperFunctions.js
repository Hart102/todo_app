const elementSelector = element => document.querySelector(element)
// const multielementSelector = element => document.querySelectorAll(element)

const save_task_func = () => { //Save todo function | Multi-purpose function
    return {
        save_todos (new_task){
            if (new_task) {
                if (!localStorage.getItem('todos')) {
                    localStorage.setItem('todos', JSON.stringify([new_task]))
                }else{
                    let data = localStorage.getItem('todos')
                    data = JSON.parse(data)
                    data.unshift(new_task)
                    return localStorage.setItem('todos', JSON.stringify(data))
                }
            }
        }, 
        get_saved_todos (){
            if (localStorage.getItem('todos')){
                return JSON.parse(localStorage.getItem('todos'))
            }
        }  
    }
}

let position = '';
const editFunc = () => { //Edit todo function
    activate_edit_mode();
    return {
        edited: getInput().userInput(),
        edit (indx){ //Display todo in input box for editing
            save_task_func().get_saved_todos().map((todo, index) => {
                if (index == indx) {
                    elementSelector('#userInput').value = todo.input
                }
            })
            return position = indx;
        },
        save_edited_todo (){ //Edit and save
            let edit_container = []
            let to_be_edited = save_task_func().get_saved_todos().filter((todo, indx) => indx == position)
            to_be_edited[0].input = this.edited

            save_task_func().get_saved_todos().map(todo => edit_container.push(todo))
            edit_container[position] = to_be_edited[0]
            localStorage.setItem('todos', JSON.stringify(edit_container))
            getInput().clearInput()
            return displayFunc().renderTask()          
        }
    }
}

const activate_edit_mode  = () => { //Activate editing mode
    elementSelector('#addBtn').classList.add('hidden')
    elementSelector('.editBtn').classList.remove('hidden')
}

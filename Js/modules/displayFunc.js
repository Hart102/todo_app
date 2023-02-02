const displayFunc = () => { 
    let html = '', new_list;
    return {
        action (){ //Save todo & clear input box
            getInput().saveInput()
            getInput().clearInput()
        },
        renderTask (){ //Render todo
            if (save_task_func().get_saved_todos()) {
                save_task_func().get_saved_todos().map((task, indx) => {
                    return html += 
                    `<div class="task" id='${indx}' onDblclick="editFunc().edit(${indx})">
                        <div class="content">
                            <label for='${indx}'>${task.input}</label>
                        </div>
                        <i class="fa fa-trash" onClick="displayFunc().delete_single_todo(${indx})"></i>
                    </div>`
                }),
                elementSelector('.todo-list').innerHTML = html
            }
        },
        delete_single_todo (indx){ //delete function
            new_list = save_task_func().get_saved_todos().filter((task, index) => index !== indx)
            localStorage.setItem('todos', JSON.stringify(new_list))
            return displayFunc().renderTask()
        },
    }
}

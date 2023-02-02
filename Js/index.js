displayFunc().renderTask()

elementSelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    if (!elementSelector('#addBtn').classList.contains('hidden')){ //Add function
        displayFunc().action()
        displayFunc().renderTask()

    }else{ //Edit function
        editFunc().save_edited_todo()
        activate_edit_mode();
        // Switching the edit and the add button after editing
        elementSelector('#addBtn').classList.remove('hidden')
        elementSelector('.editBtn').classList.add('hidden')
    }
})
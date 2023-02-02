const getInput = () => {
    return{
        input: elementSelector('#userInput').value,
        id: Math.random().toString(36).substring(2),
        userInput (){
            return this.input
        },
        saveInput (){
            if (this.input !== '') {
                save_task_func().save_todos({
                    id: this.id, input: this.input
                })
            }
        },
        clearInput (){
            return elementSelector('#userInput').value = ''
        },
    }
}
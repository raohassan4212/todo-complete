const port = 5000;
const base = `http://localhost:${port}`;

export const getTransaction = async () => {
    return fetch(`${base}/get-todos`, {
        method: "GET",
    })
        .then((response) =>
            response.json()
        )
};

export const addTodos = (todo) =>
    fetch(`${base}/add-todos`, {
        cache: "default",
        mode: "cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todo: todo })
    })
        .then(() => {
            console.log(`add todos`);
        })
        .catch((err) => {
            console.log(err);
        });


export const deleteTodo = (id) =>
    fetch(`${base}/delete/${id}`, {
        cache: "default",
        mode: "cors",
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    })
        .then(() => {
            console.log(`add todos`);
        })
        .catch((err) => {
            console.log(err);
        });


export const updateTodo = (id,updateTODO) =>
    fetch(`${base}/update/${id}`, {
        cache: "default",
        mode: "cors",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updatetodo: updateTODO })
    })
        .then(() => {
            console.log(`update todos`);
        })
        .catch((err) => {
            console.log(err);
        });
import uuid from 'uuid'
const todosData = [
    {
        id: uuid.v4(),
        text: "Take out the trash",
        completed: true
    },
    {
        id: uuid.v4(),
        text: "Grocery shopping",
        completed: false
    },
    {
        id: uuid.v4(),
        text: "Clean gecko tank",
        completed: false
    },
    {
        id: uuid.v4(),
        text: "Mow lawn",
        completed: true
    },
    {
        id: uuid.v4(),
        text: "Catch up on Arrested Development",
        completed: false
    }
]

export default todosData
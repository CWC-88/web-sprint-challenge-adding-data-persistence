const db = require('../dbconfig')





const getProjects = () => {
    return db('projects');
}



const getResources = () => {
    return db('resources');
}


const getTask= ()=> {
    return db('tasks');
}

const addProject = project => {
    return db('projects').insert(project);
}


const addResource = (id, resource) => {
    return db('resources').insert(resource);
}




const addTask = (id, task) => {
    return db('tasks').insert(task)
}





module.exports = {
    getProjects,
    getResources,
    getTask,
    addProject,
    addResource,
    addTask

}
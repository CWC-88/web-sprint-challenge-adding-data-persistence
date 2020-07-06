const express = require('express')

const Project = require('../model/model.js')

const router = express.Router();

// get projects
router.get('/', (request, response) => {
    Project.getProjects()
        .then(res => response.status(200).json(res))
        .catch(err => {
            console.log(err);
            response.status(500).json({message: 'could not get projects'});
        });
});

// get resources
router.get('/resources', (request, response) => {
    Project.getResources()
        .then(res => response.status(200).json(res))
        .catch(err => {
            console.log(err);
            response.status(500).json({message: 'could not get resource'});
        });
});


//get tasks
router.get('/tasks', (req, res) => {
    Project.getTask()
        .then(task => {
            res.status(200).json(task);
        })
        .catch((err) => {
            console.log(error);
            res.status(500).json({
                message: " could not get tasks"
            })
        })
})

// add project
router.post('/', (request, response) => {
    Project.addProject(request.body)
        .then(res => response.status(200).json(res))
        .catch(err => {
            console.log(err);
            response.status(500).json({message: 'error adding project'});
        });
});

// add resource
router.post('/:id/resources', (request, response) => {
    Project.addResource(request.params.id, request.body)
        .then(res => response.status(200).json(res))
        .catch(err => {
            console.log(err);
            response.status(500).json({message: 'error adding resource'});
        });
});

// add task
router.post('/:id/', (request, response) => {
    Project.addTask(request.params.id, request.body)
        .then(res => response.status(200).json(res))
        .catch(err => {
            console.log(err);
            response.status(500).json({message: 'error adding task'});
        });
});



module.exports = router;
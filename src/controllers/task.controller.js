import Task from '../models/Task';

export async function getTasks(req, res){
    try{
        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            data: tasks
        });
    } catch(e){
        console.log(e);
    }
}

export async function getTasksByProject(req, res){
    try{
        const { projectid } = req.params;
        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: { projectid }
        });
        res.json({
            data: tasks
        });
    } catch(e){
        console.log(e);
    }
}

export async function getTask(req, res){
    try{
        const { id } = req.params;
        const task = await Task.findOne({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: { id }
        });
        res.json({
            data: task
        });
    } catch(e){
        console.log(e);
    }
}

export async function createTask(req, res){
    const { name, done, projectid } = req.body;
    try{
        let newTask = await Task.create({
            name,
            done,
            projectid
        }, {
            fields: ['name', 'done', 'projectid']
        });
        if (newTask){
            res.json({
                message: 'Task created successfully',
                data: newTask
            });
        }
    } catch(e){
        console.log(e);
        res.status(500).json({
            message: 'Someting goes wrong',
            data: {}
        })
    }
    
}

export async function editTask(req, res){
    try{
        const { id } = req.params;
        const { name, done, projectid } = req.body;

        const task = await Task.findOne({
            attributes: ['id', 'name', 'done', 'projectid'],
            where: { id }
        });

        const updatedTask = await Task.update({
            name,
            done,
            projectid
        },
        {
            where: { id }
        });

        return res.json({
            message: 'Task updated successfully',
            data: updatedTask
        });
    } catch(e){
        console.log(e);
    }
}

export async function deleteTask(req, res){
    try{
        const { id } = req.params;
        const deleteRowCount = await Task.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Task deleted successfully',
            count: deleteRowCount
        });
    } catch(e){
        console.log(e);
    }
}
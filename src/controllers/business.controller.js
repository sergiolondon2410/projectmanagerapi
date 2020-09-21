import Business from '../models/Business';

export async function getBusinesses(req, res){
    try{
        const businesses = await Business.findAll();
        
        res.json({
            data: businesses
        });
    } catch(e){
        console.log(e);
    }
}

export async function getBusiness(req, res){
    try{
        const { id } = req.params;
        const business = await Business.findOne({
            where: {
                id
            }
        });
        res.json({
            data: business
        });
    } catch(e){
        console.log(e);
    }
}

// export async function createBusiness(req, res){
//     const { name, priority, description, deliverydate } = req.body;
//     try{
//         let newProject = await Project.create({
//             name,
//             priority,
//             description,
//             deliverydate
//         }, {
//             fields: ['name', 'priority', 'description', 'deliverydate']
//         });
//         if (newProject){
//             res.json({
//                 message: 'Project created successfully',
//                 data: newProject
//             });
//         }
//     } catch(e){
//         console.log(e);
//         res.status(500).json({
//             message: 'Someting goes wrong',
//             data: {}
//         })
//     }
    
// }

// export async function editProject(req, res){
//     try{
//         const { id } = req.params;
//         const { name, priority, description, deliverydate } = req.body;

//         const projects = await Project.findAll({
//             attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
//             where: {
//                 id
//             }
//         });

//         if(projects.length > 0){
//             projects.forEach(async project => {
//                 await project.update({
//                     name,
//                     priority,
//                     description,
//                     deliverydate
//                 });
//             })
//         }
        
//         return res.json({
//             message: 'Project updated successfully',
//             data: projects
//         });
//     } catch(e){
//         console.log(e);
//     }
// }

// export async function deleteProject(req, res){
//     try{
//         const { id } = req.params;
//         const deleteRowCount = await Project.destroy({
//             where: {
//                 id
//             }
//         });
//         res.json({
//             message: 'Project deleted successfully',
//             count: deleteRowCount
//         });
//     } catch(e){
//         console.log(e);
//     }
// }
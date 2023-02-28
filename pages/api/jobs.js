import {prisma} from '/config/db';

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getJob(req, res);

        case "POST":
                return await addJob(req, res);
    }
}

const getJob = async (req, res)=>{
    try {
        const result = await prisma.job.findMany();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const addJob = async (req, res)=>{
    try {
        const {job_title, description, status, job_type, assigned_to} = req.body;
    
        const data = {
            job_title : job_title,
            description : description,
            status : status,
            job_type : job_type,
            assigned_to : assigned_to
        }
        const result = await prisma.job.create({
            data : data,
            select : {
                id: true
            }
        });
        return res.status(200).json({result});
    } catch (error) {
        return res.status(500).json(error);
    }
}
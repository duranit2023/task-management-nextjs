import {prisma} from '/config/db';

export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            return await getRole(req, res);

        case "POST":
                return await addRole(req, res);
    }
}

const getRole = async (req, res)=>{
    try {
        const result = await prisma.role.findMany();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const addRole = async (req, res)=>{
    try {
        const {name} = req.body;
        const data = {
            name : name
        }
        const result = await prisma.role.create({
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
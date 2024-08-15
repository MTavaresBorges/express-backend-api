import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAll = async() => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            pass: true
        }
    })
    
    return users    
}

const create = () => {

}

export default {
    create
}
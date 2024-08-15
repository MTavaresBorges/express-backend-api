import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAll = async() => {
    const products = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            price: true,
            stock: true,
            code: true
        }
    })
    
    return products    
}

const create = () => {

}

export default {
    create
}
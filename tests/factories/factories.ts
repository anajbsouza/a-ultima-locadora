
import prisma from "../../src/database";
import { faker } from "@faker-js/faker";

export async function createMinor() {
    return await prisma.user.create({
        data: {
            id: 1,
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            birthDate: faker.date.anytime(),
            cpf: faker.internet.ip(),
        }
    })
}

export async function createRental() {
    return await prisma.rental.create({
        data: {
            id: 1,
            date: '2023-10-01T00:00:00.000Z',
            endDate: '2023-10-04T00:00:00.000Z',
            userId: 1,
            closed: faker.datatype.boolean()
        }
    })
}

// export async function createMovie() {
//     return await prisma.rental.create({
//         data: {
//             id: 1,
//             adultsOnly: true
//         }
//     })
// }
/*
- O usuário só pode alugar se:
    - Escolher no mínimo 1 filme e no máximo 4 filmes.
    - Não estiver com uma locação pendente. (`closed = false`)
    - Se o usuário for menor de idade, não pode haver nenhum filme adulto (`adultsOnly = true`).
- Cada filme:
    - Só pode ser alugado se estiver disponível (`rentalId = null`)
    - Só existe uma unidade de cada um.
*/

import supertest from 'supertest';
import app from '../../src/app';
import prisma from '../../src/database/index';
import { createMinor, createRental } from '../factories/user-factory';

const api = supertest(app);

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("Rentals Service Integration Tests", () => {
  it("POST /rentals", async () => {
    expect(true).toBe(true);
  })
  it("GET /rentals", async () => {
    const user = await createMinor();
    const rental = await createRental();
    const { status, body } = await api.get(`/rentals/1`);
    expect(status).toBe(200);
    expect(body).toEqual([rental]);
  })
})
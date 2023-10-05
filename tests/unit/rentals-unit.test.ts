/*
- O usuário só pode alugar se:
    - Escolher no mínimo 1 filme e no máximo 4 filmes.
    - Não estiver com uma locação pendente. (`closed = false`)
    - Se o usuário for menor de idade, não pode haver nenhum filme adulto (`adultsOnly = true`).
- Cada filme:
    - Só pode ser alugado se estiver disponível (`rentalId = null`)
    - Só existe uma unidade de cada um.
*/

import { insufficientAgeError } from 'errors/insufficientage-error';
import { response } from 'express';
import moviesRepository from 'repositories/movies-repository';
import rentalsRepository from 'repositories/rentals-repository';
import usersRepository from 'repositories/users-repository';
import rentalsService from '../../src/services/rentals-service';


describe("Rentals Service Unit Tests", () => {
  
  beforeEach(() => {
	  jest.clearAllMocks();
	});

  it("Quantity should be between 1 and 4", async () => {
	  jest.spyOn(rentalsRepository, "getRentals").mockImplementationOnce((): any => {
			return [
		    { id: 1, closed: false, date: new Date(), endDate: new Date(), userId: 1 },
		    { id: 2, closed: false, date: new Date(), endDate: new Date(), userId: 1 }
		  ]});
	
	  const rentals = await rentalsService.getRentals();
	  expect(rentals).toHaveLength(2);
	});

  
  // it("Should not allow minors to rent adult films", async () => {
  //   const user = jest.spyOn(usersRepository, "getById").mockImplementationOnce((): any => {
  //     return [
  //       { id: 1, firstName: 'Ana', lastName: 'Ramos', email: 'ana@ana.com', cpf: '12345678', birthDate: '2007/05/23' }
  //     ]
  //   })
  //   const movie = jest.spyOn(moviesRepository, "getById").mockImplementationOnce((): any => {
  //     return [
  //       { id: 1, adultsOnly: true }
  //     ]
  //   })
    
  //   expect(user).toContainEqual()
  //   expect(movie).toEqual({adultsOnly: true});
  //   expect(response.statusMessage).toEqual(insufficientAgeError);
  // })

    // it("Should not have a pending rental", () => {
  //   jest.spyOn(rentalsRepository, "getRentals").mockImplementationOnce((): any => {
	// 		return [
	// 	    { id: 1, closed: false, date: new Date(), endDate: new Date(), userId: 1 }
	// 	  ]});
  //   expect(true).toBe(true);
  // })

  it("should pass", () => {
    expect(true).toBe(true);
  })
})
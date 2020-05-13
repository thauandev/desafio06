// import AppError from '../errors/AppError';
import { getCustomRepository } from 'typeorm';

import TransactionsRepository from '../repositories/TransactionsRepository';

import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionsRepo = getCustomRepository(TransactionsRepository);

    const transaction = transactionsRepo.create({
      title,
      value,
      type,
    });

    await transactionsRepo.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;

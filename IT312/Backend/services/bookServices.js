import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async (req, res) => {
    const books = await bookModel.fetch();
    return books;
}
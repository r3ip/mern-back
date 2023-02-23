import { Router } from 'express';
import { getBooks, getBooksById, postBooks, putBooks, deleteBooks } from '../controllers/books.controller.js'
const router = Router();

router.get('/api/books' , (req, res) => {
  getBooks(req, res);
});

router.post('/api/books' , (req, res) => {
  postBooks(req, res);
});

router.get('/api/books/:id' , (req, res) => {
  getBooksById(req, res);
});

router.put('/api/books/:id' , (req, res) => {
  putBooks(req, res);
});

router.delete('/api/books/:id' , (req, res) => {
  deleteBooks(req, res);
});

export default router;
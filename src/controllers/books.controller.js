import Books from '../models/Books.js';

const getBooks = async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (error) {
    return res.status(500).json({message: error.message });
  }
}

const getBooksById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.findById(id);
    res.json(book);
  } catch (error) {
    return res.status(500).json({message: error.message });
  }
}

const postBooks = async (req, res) => {
  try {
    const { title, author, copies, imageUrl } = req.body;

    const addBook = new Books({
      title,
      author,
      copies,
      imageUrl
    });

    await addBook.save();
    res.json({message:"add book!"});
  } catch (error) {
    return res.status(500).json({message: error.message });
  }
}

const putBooks = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, copies, imageUrl } = req.body;

    const updateBook = {
      title,
      author,
      copies,
      imageUrl
    };

    await Books.findByIdAndUpdate(id, updateBook);
    res.json({message:"update book!"});
  } catch (error) {
    return res.status(500).json({message: error.message });
  }
}

const deleteBooks = async (req, res) => {
  try {
    const { id } = req.params;
    await Books.findByIdAndDelete(id);
    res.json({message:"delete book!"});
  } catch (error) {
    return res.status(500).json({message: error.message });
  }
}

export { getBooks, postBooks, getBooksById, putBooks, deleteBooks };



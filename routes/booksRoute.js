const {Router}=require("express")
const {getBooks, createBook, updateBook}=require("../controllers/booksController")
const {byCategory, byAuthor}=require("../Handlers/books.handlers")



const router =Router();

router.route("/books").get([byCategory, byAuthor], getBooks).post(createBook)

router.put("/book", updateBook)


module.exports=router;

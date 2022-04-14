const books = require("../models/books");
exports.sendReqParam = (req, res) => {
    books.find( {}, (err, info) => {
        if (info) res.render("home", {data: info});
    });
};
exports.respondWithImage = (req, res) => {
    let book = req.params.book;
    books.find( {}, (err, info) => {
        if (info) res.render(book, {data: info[book-1]});
    });
};

exports.sendReqCss = (req, res) => {
    res.sendFile(`./public/css/style.css`, {root: "./"})
};
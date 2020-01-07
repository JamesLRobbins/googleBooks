import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    // console.log(q);
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}&key=AIzaSyC_7dqrqP2R8H9_A8SRPxI6Yi1VH74GZUU`);
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};

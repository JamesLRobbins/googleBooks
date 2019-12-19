import React, { Component } from "react";
import Description from "./components/Description";
import Header from "./components/Header";
import Form from "./components/Form";
import API from "./utils/API"

class App extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""

  };

  componentDidMount() {
    this.loadBooks();
  }
  
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.name)
      .then(res =>
        this.setState({
          books: res.data
          
        })
      )
      .catch(err => console.log(err));

        this.setState({
          books: []
        });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  render() {
  return (
    <div>
      <Header />
      <Description />
      <Form 
      handleChange = {this.handleChange}
      handleSubmit = {this.handleSubmit}
      />
      
    </div>
  );
}
}

export default App;



import React from "react";
import Tarjeta from "./tarjeta";


class AllPost extends React.Component {
  state = {
    posts: null,
  }
  getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({
        posts: json,
      }));
  };
  render() {
    console.log("this.state:", this.state);

    return (
      <div class="container">
        <div class="row">
          <div class="col-md-3 border-right">
            <h6>clic to get all post</h6>
            <button type="button" onClick={this.getPost} class="btn btn-dark">
              Post
            </button>
          </div>
          <div class="col-md-9">
            <h3>This is my list of post</h3>
            {/* <p>{this.state.posts && this.state.posts.map(item => <p>{item.title}</p>)}</p> */}
            <p>{this.state.posts && this.state.posts.map(item => <p>
              <Tarjeta
                title={item.title}
                id={item.id}
                body={item.body}
              />

            </p>)}</p>
          </div>
        </div>
      </div>
    );
  }
}


export default AllPost;

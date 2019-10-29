import React from "react";
import Tarjeta from "./tarjeta";


class Single extends React.Component {
  state = {
    showText: "",
    posts: null
  };

  getApi = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.showText}`)
      .then(response => response.json())
      .then(json => this.setState({
        posts: json,
      }));
  };


  inputHandler = (e) => this.setState({ showText: e.target.value });

  render() {
    console.log(this.state)
    return (
      <div class="container-fluid">
        <div class="row">
          <div style={{ background: "gray", color: "white", padding: "15px" }} class="col-">
            <h6>Post individuales</h6>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Numero de post</label>
                <input type="text" class="form-control" id="exampleFormControlTextarea1" onChange={this.inputHandler}></input>
                <button type="button" onClick={this.getApi} style={{ margin: "20px" }} class="btn btn-dark">
                  Dame mi post
            </button>
              </div>
            </form>
          </div>
          <div class="col-sm">
            <h6>El post que pediste </h6>
            <Tarjeta
              id={<p>{this.state.posts && this.state.posts.id}</p>}
              title={<p>{this.state.posts && this.state.posts.title}</p>}
              body={<p>{this.state.posts && this.state.posts.body}</p>}
            />
            <div style={{ backgroundColor: "white", color: "black" }}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Single;

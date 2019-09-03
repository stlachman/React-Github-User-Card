import React from "react";
import axios from "axios";

class GithubList extends React.Component {
  state = {
    loading: true,
    user: {
      name: "",
      followers: null,
      username: ""
    },
    error: ""
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/stlachman`)
      .then(res => {
        console.log(res);
        this.setState({
          user: {
            name: res.data.name,
            username: res.data.login,
            followers: res.data.followers
          },
          loading: false
        });
      })
      .catch(err => this.setState({ error: err, loading: false }));
  }

  render() {
    const { loading, user } = this.state;
    if (loading) {
      return (
        <div>
          <h2>Loading</h2>
        </div>
      );
    }
    return (
      <div>
        <h2>Name: {user.name}</h2>
        <h3>Username: {user.login}</h3>
        <p>Number of Followers: {user.followers}</p>
      </div>
    );
  }
}

export default GithubList;

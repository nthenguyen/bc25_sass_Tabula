function Services() {
  this.fetchData = () => {
    return axios({
      url: "https://62654a2994374a2c506eee58.mockapi.io/api/v1/userList",
      method: "GET",
    });
  };
}

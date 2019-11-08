import axios from "axios";

export default {
  saveBook: function (savedBook) {
    return axios.post('/saved', { body: savedBook });
  },
  getSavedBooks: function () {
    return axios.get("/saved")
  },
  deleteSavedBooks: function (id) {
    return axios.delete('/saved/' + id)
  }
}
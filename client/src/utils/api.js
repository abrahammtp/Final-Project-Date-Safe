import axios from "axios";

export default {
  // Gets all saved dates
  getSavedDates: function() {
    return axios.get("/api/dates");
  },
  // Deletes the saved book with the given id
  deleteDates: function(id) {
    return axios.delete("/api/dates/" + id);
  },
  // Saves an book to the database
  saveDate: function(dateData) {
    return axios.post("/api/dates/", dateData);
  }
};

import axios from "axios";

export default {
  // Gets all saved dates
  getSavedDates: function() {
    return axios.get("/api/dates");
  },
  // Deletes the saved date with the given id
  deleteDates: function(id) {
    return axios.delete("/api/dates/" + id);
  },
  // Saves a date to the database
  saveDate: function(dateData) {
    return axios.post("/api/dates", dateData);
  }
};

import axios from "axios";

export default {
  // Dates
  // Gets all saved dates
  getSavedDates: function(id) {
    return axios.get("/api/dates/" + id);
  },
  // Deletes the saved date with the given id
  deleteDates: function(id) {
    return axios.delete("/api/dates/" + id);
  },
  // Saves a date to the database
  saveDate: function(dateData) {
    return axios.post("/api/dates/", dateData);
  },

  // Contacts
  // Gets all saved contacts
  getSavedContacts: function() {
    return axios.get("/api/contacts");
  },
  // Deletes the saved contact with the given ud
  deleteContacts: function(id) {
    return axios.delete("/api/contacts/" + id);
  },
  saveContact: function(contactData) {
    return axios.post("/api/contacts", contactData);
  },
};

import axios from "axios";

export default {
  fetchContacts: function () {
    axios.get("http://localhost:5173/api/contact-list").then((res) => {
      const contacts = res.data;
      return contacts.map((contact) => {
        return {
          name: contact.name,
          email: contact.email,
          label: contact.label,
          message: contact.message,
          userCreated: contact.userCreated,
        };
      });
    });
  },
};

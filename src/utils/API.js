import axios from "axios";

export default {
  fetchContacts: function () {
    axios.get("http://localhost:9001/api/contacts").then((res) => {
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

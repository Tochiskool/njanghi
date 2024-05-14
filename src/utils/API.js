import axios from "axios";

export default {
  fetchContacts: function () {
    axios.get("http://localhost:5173/").then((res) => {
      const contacts = res.data;
      return contacts.map((contact) => {
        return {
          name: contact.name,
          email: contact.email,
          label: contact.label,
          text: contact.text,
          userCreated: contact.userCreated,
        };
      });
    });
  },
};

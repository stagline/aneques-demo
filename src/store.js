import create from "zustand";
import produce from "immer";

const useStore = create((set) => ({
  usersData: [
    {
      id: Math.floor(Math.random() * 100),
      country: "INDIA",
      email: "user1@gmail.com",
      firstName: "user1",
      information: "user1-test",
      phone: "111111111",
      fileupload: "",
    },
    {
      id: Math.floor(Math.random() * 100),
      country: "UK",
      email: "user2@gmail.com",
      firstName: "user2",
      information: "user2-test",
      phone: "2222222222",
      fileupload: "",
    },
    {
      id: Math.floor(Math.random() * 100),
      country: "USA",
      email: "user3@gmail.com",
      firstName: "user3",
      information: "user3-test",
      phone: "3333333333",
      fileupload: "",
    },
  ],
  addUser: (payload) =>
    set(
      produce((draft) => {
        draft.usersData.push({
          id: Math.floor(Math.random() * 100),
          country: payload.country,
          email: payload.email,
          firstName: payload.firstName,
          information: payload.information,
          phone: payload.phone,
          fileupload: payload.fileupload,
        });
      })
    ),
}));

export default useStore;

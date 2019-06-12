const initialState = {
  userList: [{ firstname: "Chetan", lastname: "Jadhav", username: "Cj", password: "1234" }]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

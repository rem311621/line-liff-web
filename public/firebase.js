const firebaseConfig = {
  apiKey: "AIzaSyD0qxZKGrp3vSXzi_fizdtQDDEMOuO_ySg",
  authDomain: "test-line-bot-e06b0.firebaseapp.com",
  projectId: "test-line-bot-e06b0",
  storageBucket: "test-line-bot-e06b0.appspot.com",
  messagingSenderId: "671550270400",
  appId: "1:671550270400:web:598b820aa5acbfc2d77625",
  measurementId: "G-8E8MNE8R9X",
};
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
console.log(firestore);

const savebtn = document.getElementById("savebtn");

savebtn.addEventListener("click", function () {
  let input_name = document.getElementById("name").value;
  let input_addr = document.getElementById("addr").value;
  let input_phone = document.getElementById("phone").value;
  let input_pay = document.getElementById("pay").value;
  console.log("save", input_name, input_addr, input_phone, input_pay);
  if (
    input_name != "" &&
    input_addr != "" &&
    input_phone != "" &&
    input_pay != ""
  ) {
    firestore
      .collection("Information")
      .add({
        Name: input_name,
        Addr: input_addr,
        Phone: input_phone,
        Pay: input_pay,
      })
      .then(() => {
        console.log("saved");
        input_name = "";
        input_addr = "";
        input_phone = "";
        input_pay = "";
        alert("save success");
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

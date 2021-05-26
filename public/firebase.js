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
const docRef = firestore.doc("inform/inputData");
const savebtn = document.querySelector("#savebtn");
const input_name = document.querySelector("#name").value;
const input_addr = document.querySelector("#addr").value;
const input_phone = document.querySelector("#phone").value;
const input_pay = document.querySelector("#pay").value;

savebtn.addEventListener("click", function () {
  console.log("save", input_name);
  docRef
    .set({
      Name: input_name,
      Addr: input_addr,
      Phone: input_phone,
      Pay: input_pay,
    })
    .then(() => {
      console.log("saved");
    })
    .catch((error) => {
      console.log(error);
    });
});

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCiqRiWgs0B9QwqdGg7z_-Fj6F9Q1XG74M',
  authDomain: 'coffee-1ae98.firebaseapp.com',
  databaseURL: 'https://coffee-1ae98.firebaseio.com',
  projectId: 'coffee-1ae98',
  storageBucket: 'coffee-1ae98.appspot.com',
  messagingSenderId: '55613129991',
  appId: '1:55613129991:web:8c3f9b375983c0938e71a2',
  measurementId: 'G-J9E9TX7KNK',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.firestore();

export const getCoffees = () => {
  const coffeeList: {}[] = [];
  database
    .collection('coffee')
    .get()
    .then((res) =>
      res.docs.forEach((coffee) => coffeeList.push(coffee.data())),
    );
  return coffeeList;
};

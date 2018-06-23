import * as firebase from 'firebase/app'
require('firebase/auth')
require('firebase/database')

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}
firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

export { firebase, googleAuthProvider, facebookAuthProvider, database as default }

// // child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val())
// })

// // database.ref('expenses')
// //   .once('value')
// //   .then(snapshot => {
// //     const expenses = []

// //     snapshot.forEach(childSnapshot => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       })
// //     })

// //     console.log(expenses)
// //   })

// // database.ref('expenses').on('value', snapshot => {
// //   const expenses = []
// //   snapshot.forEach(childSnapshot => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   })
// //   console.log(expenses)
// // })

// // database.ref('expenses').push({
// //   description: 'Rent',
// //   note: 'Needs to be paid',
// //   amount: '155000',
// //   createdAt: 0
// // })

// // database.ref('notes/-LFNxL5z-6AhDzdnn4jR').remove()

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python'
// // })

// // database.ref().on('value', snapshot => {
// //   const val = snapshot.val()
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// // }, e => {
// //   console.log('There was an error: ', e)
// // })

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val()
// //     console.log(val)
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e)
// //   })

// // database.ref().set({
// //   name: 'Taylor',
// //   age: 32,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Provo',
// //     Country: 'United States'  
// //   }
// // }).then(() => {
// //   console.log('Data is saved!')
// // }).catch((e) => {
// //   console.log('This failed.', e)
// // })

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // })

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data was removed')
// //   })
// //   .catch((e) => {
// //     console.log('Did not remove data', e)
// //   })
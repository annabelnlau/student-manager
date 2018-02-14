/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {User, Student, Campus} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'}),
    User.create({email: 'annabel@annabel.com', password: '123'})
  ])
  const campuses = await Promise.all([
    Campus.create({name: 'Jupiter', description: 'Jupiter is a very good school'}),
    Campus.create({name: 'Mars', description: 'Mars is a very good school', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF00WERcmZI0ebjmo6e7rS-H4V0p9DOtiGP_kY9mB47GKsC_I7'}),
    Campus.create({name: 'Neptune', description: 'Neptune is a very good school', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrA_Dfb13VSM9hurffzPaSte_2aHAHJNMze5Ccc5EC0I4kLMrJ'}),
    Campus.create({name: 'Venus', description: 'Venus is a very good school', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnGh_RbQJYADlSiRgaWaNaefZ-TTsR6KKTDTJkADWUVSDRhtSYsQ'})
  ])
  const students = await Promise.all([
    Student.create({firstName: 'Annabel', lastName: 'Lau', email: 'annabel@annabel.com', gpa: 3.8, campusId: 1}),
    Student.create({firstName: 'Chikara', lastName: 'Takahashi', email: 'chikara@chikara.com', gpa: 3.9, campusId: 1}),
    Student.create({firstName: 'Nick', lastName: 'DiRienzo', email: 'nick@nick.com', gpa: 3.9, campusId: 3}),
    Student.create({firstName: 'Gladys', lastName: 'Wu', email: 'gladys@gladys.com', gpa: 3.7, campusId: 2}),
    Student.create({firstName: 'Caleb', lastName: 'Li', email: 'caleb@caleb.com', gpa: 3.7, campusId: 4})
  ])


  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${students.length} students`)
  console.log(`seeded ${campuses.length} campuses`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')

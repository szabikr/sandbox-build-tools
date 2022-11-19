const timesTwo = (num) => num * 2

const sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const tempData = [...sampleData]

const result = tempData.map(timesTwo)

console.log(`The result is: ${result}`)

function artificialAsyncFunc() {
  return new Promise((resolve, reject) => {
    const randNumber = Math.floor(Math.random() * 2)
    if (randNumber === 1) {
      return resolve('SUCCESS')
    } else {
      return reject('FAILURE')
    }
  })
}

async function asyncCall() {
  try {
    const asyncResult = await artificialAsyncFunc()
    console.log(`Async function result: ${asyncResult}`)
  } catch (error) {
    console.log(`Async function failed: ${error}`)
  }
}

asyncCall()

const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success')
    reject('Error')
  })
})

const fireProm = async () => {
  try {
    const res = await prom1
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

fireProm()

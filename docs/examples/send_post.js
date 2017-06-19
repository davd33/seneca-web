let Req = require('request')

let url = process.env.using_url

console.log(`get on: ${url}/todo/list`)
Req.get(`${url}/todo/list`, (err, res) => {

  if (err) console.log(err)
  console.log(res.body)

  console.log(`post on: ${url}/manage`)
  Req.post(
    `${url}/manage`,
    {
      user: "davd"
    },
    (err, res) => {
      if (err) console.log(err)
      console.log(res.body)

      console.log(`post on: ${url}/todo/test/myName`)
      Req.post(
        `${url}/todo/test/davd`,
        {
          json: true
        },
        (err, res) => {
          if (err) console.log(err)
          console.log(res.body)
        }
      )
    }
  )
})
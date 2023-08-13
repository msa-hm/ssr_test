import { Router } from 'express'

let router = Router()

router.get('/api/user/:id/auth', (req, res) => {
  console.log(typeof(req.params.id), ' - ', req.params.id)
  if (req.params.id !== '0') {
    res.send({status: `Success: ${req.params.id}`})
  } else {
    console.log('Error proc')
    throw new Error('Fail: ' . req.params.id)
  }

})



export { router as userRouter }

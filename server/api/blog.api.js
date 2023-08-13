import {Router} from 'express'

let router = Router()

/* Мидлвар для всех путей сразу*/
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/api/blog/get', (req, res) => {
  try {
    console.log('request in server')
    res.status(200).send({ message: 'Successs' })
  } catch (e) {
    res.status(500).send({ message: 'Fail' })
  }
})

export { router as blogRouter }

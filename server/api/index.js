import { blogRouter } from './blog.api.js'
import { userRouter } from './user.api.js'
import userAuthCheck from '../middlewares/userAuthCheck.middleware.js'


export function createApiRoutes(app) {
  app.use(blogRouter)
    .use(userRouter)
    .use(userAuthCheck)
}

import { chain } from '@/middlewares/chain'
import { withMiddleware1 } from '@/middlewares/middleware1'
import { withMiddleware2 } from '@/middlewares/middleware2'

export default chain([withMiddleware1, withMiddleware2])

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// }
export const config = { matcher: ['/protected/:path*'] }

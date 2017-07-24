const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('frontpage', '/')

routes.add('work/sketchpacks', '/work/sketchpacks')
routes.add('work/tango_out', '/work/tango-out')

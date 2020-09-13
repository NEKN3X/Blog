import { objectType, queryType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
  },
})

export const allUsers = queryType({
  definition(t) {
    t.list.field('allUsers', {
      type: 'User',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany({})
      },
    })
    t.crud.user()
    t.crud.users()
  },
})

import { objectType, queryType, mutationType } from '@nexus/schema'

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

export const bigRedButton = mutationType({
  definition(t) {
    t.field('bigRedButton', {
      type: 'String',
      async resolve(_parent, _args, ctx) {
        const { count } = await ctx.db.user.deleteMany({})
        return `${count} user(s) destroyed. Thanos will be proud.`
      },
    })

    t.crud.createOneUser()
    t.crud.deleteOneUser()
    t.crud.deleteManyUser()
    t.crud.updateOneUser()
    t.crud.updateManyUser()
  },
})

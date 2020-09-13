import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  allUsers: Array<User>
  user?: Maybe<User>
  users: Array<User>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<UserWhereUniqueInput>
  after?: Maybe<UserWhereUniqueInput>
}

export type User = {
  __typename?: 'User'
  id: Scalars['String']
  name: Scalars['String']
}

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>
}

export type AllUsersQueryVariables = Exact<{ [key: string]: never }>

export type AllUsersQuery = { __typename?: 'Query' } & {
  allUsers: Array<{ __typename?: 'User' } & Pick<User, 'id' | 'name'>>
}

export const AllUsersDocument = gql`
  query AllUsers {
    allUsers {
      id
      name
    }
  }
`

export function useAllUsersQuery(
  options: Omit<Urql.UseQueryArgs<AllUsersQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<AllUsersQuery>({ query: AllUsersDocument, ...options })
}

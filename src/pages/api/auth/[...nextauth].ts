import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID || '',
      clientSecret: process.env.CLIENT_SECRET || '',
    }),
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        },
        repeatPassword: {
          label: 'Repeat Password',
          type: 'password',
          placeholder: 'Repeat your password',
        },
      },
      async authorize(credentials, req) {
        try {
          const {email, password} = credentials as {
            email: string
            password: string
          }

          console.log('password', password)
          console.log('email', email)
          if (email !== 'ismayil@gmail.com' || password !== 'qwerty123') {
            console.log('error')
            new Error('You entered wrong mail or password')
            return null
          }

          console.log('authorized')

          return {
            id: '123',
            name: 'Ismayil',
            email: 'ismayil@gmail.com',
            avatar: 'url',
          }
        } catch (error: any) {
          console.log('error in catch ')
          throw new Error(error)
        }
      },
    }),
  ],
  secret: process.nextTick.SECRET,
  // Остановись и сгори полностью
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  // },
})

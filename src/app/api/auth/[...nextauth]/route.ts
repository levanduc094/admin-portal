import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { Provider } from 'next-auth/providers/index';

const nextProviders: Provider[] = [
  CredentialsProvider({
    type: 'credentials',
    credentials: {},
    async authorize(credentials, req) {
      const { email, password } = credentials as {
        email: string;
        password: string;
      };
      // const res = await fetch("http://localhost:8000/auth/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     username: credentials?.username,
      //     password: credentials?.password,
      //   }),
      // });
      // const user = await res.json();
      // perform you login logic
      // find out user from db
      // if (email !== 'john@gmail.com' || password !== '1234') {
      //   throw new Error('invalid credentials');
      // }
      return {
        id: '1234',
        name: 'John Doe',
        email: 'john@gmail.com',
        role: 'admin',
      };
    },
  }),
];

const nextAuthOptions: NextAuthOptions = {
  providers: nextProviders,
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: '/auth/sign-in', signOut: '/auth/sign-out' },
  callbacks: {
    jwt(params) {
      // return final_token
      return params.token;
    },
  },
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };

```javascript
// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        // Add your authentication logic here
        // ...
      }
    })
  ],
  callbacks: {
    // ...
  },
  secret: process.env.NEXTAUTH_SECRET
}
export default NextAuth(authOptions)
```
```javascript
// pages/about.js
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]'; // Correct import

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context, authOptions);
  return {
    props: {
      session
    }
  };
}

export default function About({ session }) {
  return (
    <div>
      <h1>About Page</h1>
      {session && (
        <p>Logged in as {session.user.email}</p>
      )}
    </div>
  );
}
```
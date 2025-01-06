# NextAuth 'authOptions is not defined' error in Next.js 15 getServerSideProps

This repository demonstrates a common error encountered when using NextAuth.js for authentication in Next.js 15 applications.  The error, 'authOptions is not defined', arises when attempting to access a protected route using `getServerSideProps` and NextAuth's `unstable_getServerSession`. The solution involves correctly importing and utilizing `authOptions`.

## Problem

The `pages/about.js` file uses `getServerSideProps` to protect the route. However, `authOptions` is not correctly imported and defined, causing a runtime error.

## Solution

The solution requires exporting `authOptions` from the `[...nextauth]` file and then correctly importing it into `pages/about.js`.  The updated `aboutSolution.js` file shows the corrected code.
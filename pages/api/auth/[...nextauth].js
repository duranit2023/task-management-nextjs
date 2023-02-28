import next from "next";
import NextAuth from "next-auth/next";
import Providers from "next-auth/providers";

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecrent:  process.env.GITHUB_SECRET
        })
    ]
})
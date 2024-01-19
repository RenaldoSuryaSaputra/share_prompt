"use client";
// provider akan digunakan pada seluruh bagian applikasi
import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => 
    <SessionProvider session={session}>
        {children}
    </SessionProvider>;

export default Provider;

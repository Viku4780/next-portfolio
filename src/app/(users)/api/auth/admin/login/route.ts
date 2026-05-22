import { NextResponse } from "next/server";


interface LoginRequestBody {
    name: string;
    email: string;
    password: string;
}

export async function POST(request: Request) {
    console.log('login api route is running');
    try {
        const {name, email, password} = await request.json() as LoginRequestBody;

        if (name !== process.env.ADMIN_LOGIN_NAME || email !== process.env.ADMIN_LOGIN_EMAIL || password !== process.env.ADMIN_LOGIN_PASSWORD) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 404 })
        }

        const response = NextResponse.json({ message: "Login successful" }, { status: 200 });
        // const response = NextResponse.next();

         response.cookies.set(
            'role', 'admin', {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
            // path: '/'
        });

       return response;
        
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
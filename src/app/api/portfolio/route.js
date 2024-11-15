import prisma from "@/app/libs/prisma";

// Fungsi untuk GET dan POST
export async function GET() {
    try {
        const projects = await prisma.portfolio.findMany();
        return new Response(JSON.stringify(projects), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}


export async function POST(req) {
    try {
        const { title, description, githubLink, liveLink } = await req.json();
        const newProject = await prisma.portfolio.create({
            data: { title, description, githubLink, liveLink },
        });
        return new Response(JSON.stringify(newProject), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}

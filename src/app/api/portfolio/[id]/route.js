import prisma from "@/app/libs/prisma";

export async function GET(req, { params }) {
    const { id } = params;
    try {
        const project = await prisma.portfolio.findUnique({
            where: { id: Number(id) },
        });
        if (!project) {
            return new Response(JSON.stringify({ error: 'Project Not Found' }), { status: 404 });
        }
        return new Response(JSON.stringify(project), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}

// Fungsi untuk UPDATE project berdasarkan ID
export async function PATCH(req, { params }) {
    const { id } = params;
    const { title, description, githubLink, liveLink } = await req.json();

    try {
        const updatedProject = await prisma.portfolio.update({
            where: { id: Number(id) },
            data: { title, description, githubLink, liveLink },
        });
        return new Response(JSON.stringify(updatedProject), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}

// Fungsi untuk DELETE project berdasarkan ID
export async function DELETE(req, { params }) {
    const { id } = params;

    try {
        await prisma.portfolio.delete({
            where: { id: Number(id) },
        });
        return new Response(JSON.stringify({ message: 'Project deleted successfully' }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
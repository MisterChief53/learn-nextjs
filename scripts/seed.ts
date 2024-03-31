import { PrismaClient } from "@prisma/client";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

const prisma = new PrismaClient();

async function main() {
    const allUsers = await prisma.users.findMany();
    console.log(allUsers);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })
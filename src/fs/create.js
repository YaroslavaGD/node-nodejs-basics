import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const filePath = join(dirName, 'files', 'fresh.txt');
const fileContent = 'I am fresh and young';

const create = async () => {
    try {
        await writeFile(
            filePath,
            fileContent,
            { flag: 'wx' }
        );
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();
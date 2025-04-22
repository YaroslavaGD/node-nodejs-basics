import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName);

const filePath = join(__dirName, 'files', 'fresh.txt');
const fileContent = 'I am fresh and young';

const create = async () => {
    try {
        await writeFile(
            filePath,
            fileContent,
            { flag: 'wx' }
        );
    } catch {
        throw Error('FS operation failed');
    }
};

await create();
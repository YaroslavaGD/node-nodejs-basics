import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readFile } from 'node:fs/promises';


const fileName = fileURLToPath(import.meta.url);
const dirName = dirname(fileName);

const dirPath = join(dirName, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const fileContent = await readFile(dirPath, { encoding: 'utf8' });
        console.log(fileContent);
    }  catch (error){
        throw new Error('FS operation failed');
    }
};

await read();
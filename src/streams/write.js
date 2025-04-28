import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createWriteStream } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToWrite = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    try {
        const writeStream = createWriteStream(fileToWrite, { encoding: 'utf-8', flags: 'a' });
        
        process.stdin.pipe(writeStream);

        writeStream.on('error', (err) => {
            console.error('Error. Failed to write file:', err.message);
        });

        writeStream.on('finish', () => {
            console.log('Writing completed.');
        });

    } catch (err) {
        console.log('Error: ', err.message);
    }
};

await write();
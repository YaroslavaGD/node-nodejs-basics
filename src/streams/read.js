import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createReadStream } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileToRead = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const readStream = createReadStream(fileToRead, { encoding: 'utf-8' });

        readStream.on('error', (err) => {
            console.error('Error. Failed to read file:', err.message);
        });

        readStream.pipe(process.stdout);
    } catch (err) {
        console.log('Error: ', err.message);
    }
};

await read();
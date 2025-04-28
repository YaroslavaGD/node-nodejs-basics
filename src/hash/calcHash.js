import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createHash } from 'node:crypto';
import { createReadStream } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileForHash = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    try {
        const readStream = createReadStream(fileForHash);
        const hash = createHash('sha256');
    
        readStream.on('data', (data) => {
            hash.update(data);
        });

        readStream.on('end', () => {
            console.log(hash.digest('hex'));
        });
    } catch (err) {
        console.error(err);
    }

};

await calculateHash();
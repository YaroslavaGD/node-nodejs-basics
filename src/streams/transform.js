import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const input = chunk.toString();
            const reversed = input.split('').reverse().join('') + "\n";
            callback(null, reversed);
        }
    });
    console.log('Enter any text you want. To end input, press Ctrl+Z.');

    await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
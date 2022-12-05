import { createReadStream } from 'fs';
import path from 'path';
import url from 'url';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    // Write your code here
    const filePath = path.resolve(__dirname, 'files/fileToRead.txt');
    const readStream = createReadStream(filePath);
    let data = '';

    readStream.on('data', (chunk) => {
        data += chunk;
    });

    readStream.on('end', () => {
        process.stdout.write(data);
    });
};

await read();
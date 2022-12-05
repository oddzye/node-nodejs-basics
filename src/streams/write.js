import { createWriteStream } from 'fs';
import path from 'path';
import url from 'url';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const write = async () => {
    // Write your code here
    const filePath = path.resolve(__dirname, 'files/fileToWrite.txt');
    const writeStream = createWriteStream(filePath);
    let data = '';

    process.stdin.on('data', (chunk) => {
        data += chunk;
    });

    process.stdin.on('end', () => {
        writeStream.write(data);
    });
};

await write();
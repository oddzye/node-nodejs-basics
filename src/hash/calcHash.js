import { createHash } from 'crypto';
import path from 'path';
import url from 'url';
import { readFile } from 'fs/promises';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const calculateHash = async () => {
    // Write your code here
    const filePath = path.resolve(__dirname, 'files/fileToCalculateHashFor.txt');
    const fileContent = await readFile(filePath, { encoding: 'utf-8'});
    const hash = createHash('sha256').update(fileContent).digest('hex');

    console.log(hash);
};

await calculateHash();
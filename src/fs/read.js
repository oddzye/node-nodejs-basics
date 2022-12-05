import { readFile} from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const read = async () => {
    // Write your code here
    const fileToRead = path.resolve(__dirname, 'files/fileToRead.txt');

    if (!existsSync(fileToRead)) {
        throw new Error('FS operation failed');
    }

    const fileContent = await readFile(fileToRead, { encoding: 'utf-8' });
    console.log(fileContent);
};

await read();
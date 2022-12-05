import { writeFile } from 'fs/promises';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
    // Write your code here
    const filePath = path.resolve(__dirname, './files/fresh.txt');
    
    writeFile(filePath, 'I am fresh and young', { flag: 'wx'})
        .catch((err) => {
            if (err.code === 'EEXIST') {
                throw new Error('FS operation failed');
            } 
        });
         
};

await create();
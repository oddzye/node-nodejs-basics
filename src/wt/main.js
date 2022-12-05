import { Worker } from 'worker_threads';
import path from 'path';
import url from 'url';
import { cpus } from 'os';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const performCalculations = async () => {
    // Write your code here
    const cpusCount = cpus().length;
    const workerPath = path.resolve(__dirname, 'worker.js');
    const workerPromises = [];

    for (let i = 0; i < cpusCount; i += 1) {
        const num = i + 10;
        const workerPromise = new Promise((resolve, reject) => {
            const worker = new Worker(workerPath, { workerData: num });
  
            worker.on('message', resolve);
            worker.on('error', reject);
        });

        workerPromises.push(workerPromise);
    }

    const result = await Promise.allSettled(workerPromises);
    const mappedResult = result.map(({ status, value }) => {
        if (status === 'fulfilled') {
            return { status: 'resolved', data: value };
        }

        if (status === 'rejected') {
            return { status: 'error', data: null };
        }
    });

    console.log(mappedResult);
};

await performCalculations();
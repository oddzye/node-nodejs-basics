const parseArgs = () => {
    // Write your code here
    const args = process.argv.slice(2);
    let result = '';
    for (const item of args) {
        if (item.startsWith('--')) {
            const propWithoutDashes = item.substring(2);
            const str = `${propWithoutDashes} is `;
            result += result ? `, ${str}` : str;
        } else {
            result += `${item}`;
        }
    }
    console.log(result);
};

parseArgs();
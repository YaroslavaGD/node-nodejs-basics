const parseArgs = () => {
    const args = process.argv.slice(2);
    const parsedArgs = args.reduce((acc, current, index) => {
        if (current.startsWith('--')) {
            const key = current.slice(2);
            const value = args[index + 1];

            if (!value || value.startsWith('--')) {
                console.error(`Missing value for ${current}`);
                process.exit(1);
            }
            acc[key] = value;
        }
        return acc;
    }, {});

    Object.entries(parsedArgs).map(([key, value]) => {
        console.log(`${key} is ${value}`);
    });
};

parseArgs();
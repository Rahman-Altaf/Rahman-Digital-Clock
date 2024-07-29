asyn function clock() {
    for (; ;) {
        const pro = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Clock Ticking Every Second");
                resolve();
            }, 1000);
            
        }
        await pro}
    clock();
}
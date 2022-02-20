const time1 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log("time 1");
        }, 3000);
    });
}
const time2 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log("time 2");
        }, 2000);
    });
}
const time3 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log("time 3");
        }, 1000);
    });
}

const time = async () => {
    await time1();
    await time2();
    await time3();

}

time()


let t1 = "time 1";
let t2 = "time 2";
let t3 = "time 3";

setTimeout(() => {
    console.log("oldout: ", t1);
}, 3000);
setTimeout(() => {
    console.log("oldout: ", t2);
}, 2000);
setTimeout(() => {
    console.log("oldout: ", t3);
}, 1000);
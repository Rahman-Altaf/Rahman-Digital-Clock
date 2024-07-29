// async function codexclock() {
//   const time = new Date();

//   try {
//     console.log("Project-1 MERN 19")
//     console.log(`Codex Clock: ${time}`);
//     await new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, 1000);
//     })
//       .then((resolve) => {
//         resolve = time;
//         console.log(resolve);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         console.log("Clock Is Ticking Every Second");
//       });
//     codexclock();
//   } catch (error) {
//     console.log(error);
//   }
// }
// codexclock();
Date.now
console.log(Date.now());
DataView
console.log(new DataView(new ArrayBuffer(8)));
Date
console.log(new Date());
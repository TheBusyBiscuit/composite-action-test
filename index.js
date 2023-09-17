import { argv } from "node:process";

console.log("Test application started!");

argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

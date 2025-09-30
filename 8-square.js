const arg = prompt("Enter the size of the square:"); // acts as the first argument
const size = parseInt(arg);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  const row = "X".repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(row);
  }
}
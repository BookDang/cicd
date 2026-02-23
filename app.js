function sum(a, b) {
    return a + b;
}

module.exports = sum;

if (require.main === module) {
    console.log("Kết quả 2 + 3 là:", sum(2, 3));
}

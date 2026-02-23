const assert = require('assert');
const sum = require('./app');

try {
    console.log("Đang bắt đầu chạy test...");

    assert.strictEqual(sum(2, 3), 5);

    assert.strictEqual(sum(-1, 1), 0);

    assert.strictEqual(sum(2, 3), 100);

    console.log("✅ Chúc mừng! Tất cả các bài test đều VƯỢT QUA.");
    process.exit(0);
} catch (error) {
    console.error("❌ Test THẤT BẠI:");
    console.error(error.message);
    process.exit(1);
}

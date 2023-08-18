const fs = require('fs');
const qr = require('qrcode');

// Tạo danh sách các ID (ví dụ: 1 đến 50)
const idList = Array.from({ length: 1}, (_, i) => i + 1);

// Đường dẫn thư mục lưu các mã QR
const qrDirectory = './qrcodes/';

// Tạo thư mục nếu chưa tồn tại
if (!fs.existsSync(qrDirectory)) {
  fs.mkdirSync(qrDirectory);
}

// Tạo mã QR cho từng ID
idList.forEach(async (id) => {
  const link = `https://lienchidoan1-3-5.vercel.app/intro`;
  // const qrFilePath = `${qrDirectory}${id}.png`;
  const qrFilePath = `intro.png`;
  try {
    await qr.toFile(qrFilePath, link);
    console.log(`QR code for ID ${id} created: ${qrFilePath}`);
  } catch (error) {
    console.error(`Error creating QR code for ID ${id}: ${error}`);
  }
});

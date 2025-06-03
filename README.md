# Chương Trình Kiểm Tra Số Dư Ví Ronin

Đây là một chương trình đơn giản được viết bằng TypeScript để kiểm tra số dư của địa chỉ ví trên mạng Ronin Saigon (testnet).

## Yêu Cầu Hệ Thống

- Node.js (phiên bản 14.0.0 trở lên)
- npm (Node Package Manager)

## Hướng Dẫn Cài Đặt

1. **Cài đặt Node.js và npm**
   - Tải và cài đặt Node.js từ [trang chủ Node.js](https://nodejs.org/)
   - Việc cài đặt Node.js sẽ tự động cài đặt npm

2. **Cài đặt các gói phụ thuộc**
   - Mở Terminal (hoặc Command Prompt trên Windows)
   - Di chuyển đến thư mục dự án
   - Chạy lệnh sau để cài đặt các gói phụ thuộc:
     ```bash
     npm install
     ```

## Cách Sử Dụng

1. **Chạy chương trình**
   - Trong Terminal, chạy lệnh:
     ```bash
     npm start
     ```
   - Chương trình sẽ yêu cầu bạn nhập địa chỉ ví EVM

2. **Nhập địa chỉ ví**
   - Nhập địa chỉ ví EVM (bắt đầu bằng '0x')
   - Ví dụ: `0x742d35Cc6634C0532925a3b844Bc454e4438f44e`

3. **Xem kết quả**
   - Chương trình sẽ hiển thị số dư của địa chỉ ví trong đơn vị RON

## Xử Lý Lỗi Thường Gặp

1. **Địa chỉ ví không hợp lệ**
   - Đảm bảo địa chỉ ví bắt đầu bằng '0x'
   - Kiểm tra độ dài địa chỉ (phải đủ 42 ký tự bao gồm '0x')

2. **Lỗi kết nối**
   - Kiểm tra kết nối internet
   - Đảm bảo mạng Ronin Saigon testnet đang hoạt động

## Giải Thích Mã Nguồn

Chương trình sử dụng:
- `ethers`: Thư viện để tương tác với blockchain
- `readline-sync`: Thư viện để đọc input từ người dùng

Các chức năng chính:
1. Kiểm tra tính hợp lệ của địa chỉ ví
2. Kết nối đến mạng Ronin Saigon thông qua JSON-RPC
3. Lấy và hiển thị số dư của ví
4. Xử lý các trường hợp lỗi có thể xảy ra

## Lưu Ý

- Chương trình này kết nối đến mạng Ronin Saigon testnet
- Không sử dụng cho các giao dịch thực tế
- Đây là công cụ học tập, hãy tìm hiểu thêm về blockchain và phát triển ứng dụng phi tập trung
// Import các thư viện cần thiết
import { ethers } from 'ethers';
import * as readlineSync from 'readline-sync';

// Hàm kiểm tra tính hợp lệ của địa chỉ ví
function isValidAddress(address: string): boolean {
    try {
        // Kiểm tra xem địa chỉ có đúng định dạng EVM không
        return ethers.isAddress(address);
    } catch {
        return false;
    }
}

// Hàm chính để kiểm tra số dư
async function checkBalance() {
    try {
        // Kết nối đến mạng Ronin Saigon testnet
        // URL của node JSON-RPC Ronin Saigon
        const provider = new ethers.JsonRpcProvider('https://saigon-testnet.roninchain.com/rpc');

        // Yêu cầu người dùng nhập địa chỉ ví
        const address = readlineSync.question('Nhap dia chi vi EVM (bat dau bang 0x): ');

        // Kiểm tra tính hợp lệ của địa chỉ
        if (!isValidAddress(address)) {
            console.log('Lỗi: Địa chỉ ví không hợp lệ!');
            return;
        }

        // Lấy số dư của địa chỉ ví
        const balance = await provider.getBalance(address);

        // Chuyển đổi số dư từ Wei sang RON (1 RON = 10^18 Wei)
        const balanceInRON = ethers.formatEther(balance);

        // Hiển thị kết quả
        console.log(`\nSố dư của địa chỉ ${address}:`);
        console.log(`${balanceInRON} RON`);

    } catch (error) {
        // Xử lý các lỗi có thể xảy ra
        if (error instanceof Error) {
            if (error.message.includes('network')) {
                console.log('Lỗi: Không thể kết nối đến mạng Ronin Saigon. Vui lòng kiểm tra kết nối internet của bạn.');
            } else {
                console.log('Lỗi:', error.message);
            }
        } else {
            console.log('Đã xảy ra lỗi không xác định.');
        }
    }
}

// Chạy chương trình
console.log('Chào mừng đến với chương trình kiểm tra số dư ví Ronin!\n');
checkBalance();
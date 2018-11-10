# Khoá 1 DApp Bài 1

## Cài đặt

1. Cài NodeJS
2. Clone repo về
3. npm install

## Chạy thử

1. node index.js
2. Kiểm tra thông tin: http://localhost:4000
3. Add transaction: http://localhost:4000/addTx?from=0x01&to=0x02&amount=1.5&gas=0.1

## Bài tập về nhà
### Bắt buộc
1. Miner: Gắp transaction từ pool vào block theo thứ tự gas cao nhất
2. Thêm gàm Blockchain.getBalance(address) trả về số dư của address đó

### Không bắt buộc
1. Ở Miner, tạo 1 map (address->amount) để cache số dư của từng address sau mỗi tx. Khi có block mới được mined, chạy từng tx và update cache. Sửa hàm getBalance ở trên để get từ cache thay vì chạy lại từng tx từ block 0.
2. Khi add 1 tx, kiểm tra xem địa chỉ from có đủ số dư không, nếu đủ thì mới cho vào txPool. Nếu không, báo "Balance not enough" về web. Bởi vì ban đầu chưa ai có số dư nên không có ai có thể chuyển tiền, vì vậy hãy chọn 1 địa chỉ được "in tiền” (giả sử là “0xff”, và nếu tx có _from_là địa chỉ này thì ko cần kiểm tra balance). Giao dịch đầu tiên là từ địa chỉ “in tiền”.

### Vài slide tham khảo
1. https://docs.google.com/presentation/d/1slPa1WW_b1MNZS-110SDTvL9uKNpij_yYv4Af9FLCGU/edit#slide=id.p
2. https://docs.google.com/presentation/d/1sltmlQ-1sMr15xF7ydY-3VhYI4KQd0MUHwsKq811efI/edit

Tài liệu tiếng Anh (đọc thêm): https://lisk.io/academy/blockchain-basics
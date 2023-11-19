- tiêu đề : Evaluation Deck 
- nội dung : path traversal đọc file 

- win mà rớt flag em win từ đầu @@ 

![Alt text](<../image/49.1.png>)

- vào test gem tiện bắt burp suite chơi 
- thì mỗi lần chọn ảnh sẽ gọi 1 api/get_health với 3 thông số 

- cùng xem source mình thấy luôn chỗ lỗi

![Alt text](<../image/49.2.png>)

- operator có thể là string vậy hoàn toàn inject được 

- trước nó đã có biến result rồi vậy nên phải inject ; result = để ghi đè giá trị của biến đó 

- và đơn giản là path traversal đọc file flag.txt th ( mé đầu nghĩ file flag nó loằng ngoằng tìm mãi rce )

![Alt text](<../image/49.3.png>)

#hackerga2101: 
- vẫn non lắm 
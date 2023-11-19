- tiêu đề : Logger Middleware
- nội dung : sql đọc nội dung flag :v 

- view qua thì nó là 1 ứng dụng dùng để lưu log 
- uhm mình thấy nó lưu vài trường dữ liệu và user agent là trường dễ thay đổi nhất nên thử đổi 
-> và thành công inject header cái log này 
- mà thế thì cũng không làm được gì 
-> thêm nhẹ dấu ' thấy bắn lỗi SQL :> nó insert cái log sau đó in ra cho ae xem 

- vậy đơn giản òi giờ khai thác luôn 

![Alt text](<../image/30.1.png>)

- NOTE : cái này là sqlite nhé ae lệnh hơi khác 
- mình táng xem bảng trước : 

 hackerga' , ( SELECT group_concat(name) FROM sqlite_master WHERE type = 'table' ) , 'hackerga2101' , 'hackerga2101' , 'hackerga2101'); --a

 - oke lấy được cái logger,flag như trên ảnh 

- tiếp tục lấy tên cột ( này search mất lúc )

SELECT sql FROM sqlite_master WHERE tbl_name = 'flag' AND type = 'table'

![Alt text](<../image/30.2.png>)

- giờ có tên cột cầm đấm thoi 

![Alt text](<../image/30.3.png>)

- pem và lụm cờ :>

#hackerga2101:
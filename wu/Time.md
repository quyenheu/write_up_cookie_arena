- tiêu đề : Time = dóc tờ sờ trên
- nội dung : cat /flag.txt

- uhm bài này có 3 cách để làm :
   + 1 là research :> 
   + 2 là white 
   + 3 là black

- ae hỏi thử gpt xem Date Processing là lỗ hổng gì nó cho ae payload luôn kk 
- vì module date này khá nổi 
- ' ; cat /flag.txt ' cho ae thích kết quả 
![Alt text](<../image/22.8.png>)

- okay vì mình đọc white nên sẽ giải thích luồng hoạt động của cả chương trình nhé ( do mình kém mắt nhìm thiếu dấu ' nên bảo đ có lỗi :> )

- đầu tiên khi có 1 request get tới 

![Alt text](<../image/22.1.png>)

- gọi đến hàm new của class router 
- định nghĩa và khởi tạo giá thị các biến 
- tiếp đó gọi thằng match của class router 

![Alt text](<../image/22.2.png>)

- thằng này xử lý hồi nó gọi index của Timecontroller 

![Alt text](<../image/22.3.png>)

- và sau đó gọi thằng class timemodel để thực thi exec ( cook khúc này nè )

![Alt text](<../image/22.4.png>)

- quay lại thằng timecontroller gọi hàm view của class router
- nó include file phtml và render kết quả exec cho ae 
- và hết phim 

- thật ra bài này dễ mà mình rảnh quá nên ngồi đọc me code luôn hehe
- thks đã đọc tới đây :> ( mặc dù lúc mình viết github cũng chưa có thằng mẹ nào vào đọc bh )

#hackerga2101
- tiêu đề : Path Traversal = vẫn là quá tin tiêu đề cookie hân hoan :> 
- nội dung : oằn 

- FACT : bài này mình làm whitebox :v ngồi blackbox lâu vđ k nghĩ ra 

- view qua web và test tính năng cái đã 

![Alt text](<../image/3.2.png>)

- mình thử ../ mọi nơi òi mà k được :> nhận ra đang làm ở cookie hân hoan nên ngồi nghĩ sâu 

- thiệt ra đoạn này mình có quét qua ffuf và biết được /api thử đi thử lại mãi không access được vào 

- cuối cùng tải source về 

![Alt text](<../image/3.3.png>)

- thì thằng api này xác thực qua ip nếu là 127.0.0.1 thì okay 

- đọc tiếp khi xử lý gói tin post nó có gọi đến /api để lấy flag và đây là chỗ ae mình cần đấm 

![Alt text](<../image/3.5.png>)

- mình thêm trường X-Forwarded-For: 127.0.0.1 để bypass chỗ api 

- và vì thấy là flag sẽ được return ở /api/flag nên mình path traversal cái userid=0/../../flag 
   + nếu bạn gửi userid=0 nó sẽ xử lý ở /api/user/0 nên mình path lại 2 nháy 60phuts 

![Alt text](<../image/3.6.png>)

- pem và lụm cờ hoi 

#hackerga2101:
- vì là hackerga nên nghĩ k nổi blackbox , ae có ý tưởng gì share mình zới :< 
- vẫn là đừng tin tiêu đề ông cookie hân hoan :> 

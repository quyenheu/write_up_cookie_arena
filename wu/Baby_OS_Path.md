- tiêu đề : Baby OS Path 
- nội dung : path traversal 

- bài này có 2 cách : 
   + 1 là phang láo 
   + 2 là làm source 

- 1 : trước tiên thì quen tay cứ ../ đi bài bảo path mà :> khong được thì encode ( ăn thật )

- 2 : 

- này mình có source òi nên là dư này 
- ae view qua xíu 

![Alt text](<../image/9.1.png>)

- tiếp đến thì đọc source thoi . đoạn này mình có code lại để tìm hiểu sao phải encode 
- thì nó nếu nhận ../ vào def server_frontend() sẽ bị syntax 

![Alt text](<../image/9.2.png>)

- túm váy là : %2e%2e%2f%2e%2e%2fflag.txt

#hackerga2101:
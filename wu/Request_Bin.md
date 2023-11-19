- tiêu đề : Request Bin
- nội dung : đọc /flag.txt gogogog

- challenges này chỉ có 1 tính năng nên mình cũng gói gọn target chính như sau 
   + xss to lfi 
   + ssti
   + edit vài chỗ :v 

- trước tiên là cái xss to lfi thì khi thực hiện nó cấm quyền đọc về server 
- tiếp là cái 'edit vài chỗ' thì mình nhận thấy khi submit lên response nào cũng chứa location và 1 thẻ a href

![Alt text](<../image/47.4.png>)

- và sau đó nó redirect đến cái trường location kia 
- vậy nên mình chặn response lại và sửa trường location, href 
--> kết quả là vẫn fail 

- cuối cùng là ssti, lúc đầu mình thử {{7*7}} server nó chặn luôn thì phải 

![Alt text](<../image/47.1.png>)

- sau đó phải đi research lúc :>> 
- thì túm lại mình tìm được 1 bài viết link tí quẳng dưới nhé 
- nó nói về ssti trong golang kk chưa var bao giờ 
- ae vào link đọc thêm nhé 

![Alt text](<../image/47.2.png>)
![Alt text](<../image/47.3.png>)

#hackerga2101: 
- https://ctftime.org/writeup/34359
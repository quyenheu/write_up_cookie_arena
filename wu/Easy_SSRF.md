- tiêu đề : Easy SSRF
- nội dung : lấy cờ ở http://localhost:PORT/flag.txt ( họ cấm localhost với 127.0.0.1 )

- view qua thì có chức năng kéo ảnh về . mình thử đổi thành http://103.97.125.53:32495/static/cookie.png thì công dụng như /static/cookie.png 
- kéo url về òi mà có thể là kéo trong vùng same-origin thoi vì mình thử kéo 1 ảnh từ google về không được 

![Alt text](<../image/10.1.png>)  

- ae có thể search như mình để tìm cách né không cần dùng localhost với 127.0.0.1

![Alt text](<../image/10.2.png>)  

   +  127.0.0.1 có giá trị số nguyên là 2130706433.
   +  017700000001 được biểu diễn dưới dạng số bát phân
   +  127.1 là một địa chỉ con trong dải địa chỉ loopback

- dùng intruder thoi brute force PORT 

![Alt text](<../image/10.3.png>)  

- và decode base64 

![Alt text](<../image/10.4.png>)  

- lụm lụm flag 

#hackerga2101:
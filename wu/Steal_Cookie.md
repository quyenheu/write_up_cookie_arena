- tiêu đề : Steal Cookie 
- nội dung : cướp được cookie của admin bot 

- thì view web tí mình sẽ tập trung chính vào 2 trang là /memo và /flag : 
  + flag là cái mà thằng admin sẽ đọc ( chỗ nhét payload để cướp cookie của admin )
  + memo là 1 chỗ để lưu value của parameters ?memo= 
  + yêu cầu là cướp cookie sau đó lưu vào /memo

- mình đoán th mà chưa kiểm chứng : chắc nó chặn không cho leak thông tin ra internet nên mới phải lưu vào /memo :v 

- thì bài này họ không filter gì ae thoải mái làm thoi 

![Alt text](<../image/26.1.png>)

![Alt text](<../image/26.2.png>)

- payload này để location.href đến trang /memo với value para là document.cookie 

![Alt text](<../image/26.3.png>)

- pem và lụm cờ hoi 
- bài này ez mà 

#hackerga2101: 
- chỗ "url" + document.cookie trong payload ae nên để là %2B thì chuẩn thực tế hơn :v 
- mà bài này nó tự encode nên thoi không cần 
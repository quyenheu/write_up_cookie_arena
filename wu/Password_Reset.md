- tiêu đề : Password Reset 
- nội dung : đổi mật khẩu admin theo ý mình 

- cách hoạt động cũng hơi hơi fishing tẹo :v mình nói thế k biết đúng k 

- thường thì ngta hay để host là 1 trường input và việc quá tin tưởng vào host là 1 sai lầm nghiêm trọng

- và có trường X-Forwarded-Host và nó cung tên host 

- trước tiên ta cứ register với login view qua đã rồi chuyển qua chức năng forgot password 

![Alt text](<../image/35.1.png>)

- khi forgot sẽ nhận được 1 đường dẫn ( trong thực tế là gửi về mail )
- okay giờ khai thác để lừa thằng admin click vào link độc từ đó đọc được cái mã để đổi mật khẩu 

![Alt text](<../image/35.3.png>)

- nhận req ở trang của mình 

![Alt text](<../image/35.2.png>)

- đã có mã rồi giờ truy cập ngược và đổi mật khẩu admin 
- login vào 

![Alt text](<../image/35.4.png>)

- lụm cờ hoiii

#hackerga2101:
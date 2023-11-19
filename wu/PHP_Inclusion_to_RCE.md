- tiêu đề : PHP Inclusion to RCE 
- nội dung : cấm '../' đổi thành ''

- NOTE : bài này không quá dễ :v ae phải nắm được mấy cái : 
   + cách hoạt động của hàm include() 
   + các file ghi log 
   + bypass path traversal 
   + và tên file chứa flag không file flag.txt

- ae có thể đọc thêm các bài LFI ở wu root-me mình làm 

- okay trước hết thì mình sẽ bypass cái vụ cấm '../' -> đổi thành ..././ thì khi nó đổi ../ thành '' thì nó sẽ lại trở thành ../ :v 

- kiểm chứng bằng cách đọc etc/passwd 

![Alt text](<../image/14.1.png>)

- tiếp đến mình xem thử technology của web -> nó sử dụng nginx mà trong nginx thì đường dẫn của mấy file .log là var/log/nginx/access.log

![Alt text](<../image/14.2.png>)

- tiếp đến thử truy cập vào đường dẫn access.log 

![Alt text](<../image/14.3.png>)

- mình để ý thấy ngoài url nó còn lưu lại user-agent mà user-agent thì hoàn toàn thao túng được 
- mình mới nghĩ đến việc đổi user-agent thành 1 tag <?php?> để khi include đến file access.log tag <?php?> sẽ được thực thi 

![Alt text](<../image/14.6.png>)

- và thành công 

![Alt text](<../image/14.4.png>)

- giờ thì nhét shell vô để lấy tên file flag thoi 

![Alt text](<../image/14.7.png>)

![Alt text](<../image/14.8.png>)

- và quay lại với cái tên phờ nhác này th 

![Alt text](<../image/14.9.png>)

- pem và lụm cờ 

#hackerga2101:
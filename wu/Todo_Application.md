- Tiêu đề: Todo Application
- Nội dung: RCE 

- yo sau 1 khoảng tgian dài vcl thì mình đã quay lại làm ctf 
  từ đợt làm cái qq gì trên cty  
  và sẽ khởi động lại với 1 bài very easy 

- check qua thì họ cho mình source rùi 

![Alt text](<../image/41.1.png>)

- và đọc source ae cũng thấy luôn là lỗi ở đâu 
- họ để 1 trường input ẩn chứa tên file mà dữ liệu ta nhập sẽ được lưu vào 
- giờ cần sửa url add=<?php phpinfo() ?> và filetodo=test.php xem có bị chặn gì khong 

![Alt text](<../image/41.2.png>)

- pem và đúng là họ chả chặn gì cả (hoặc chưa đến lúc :>>)

- đúng thật sau khi kiểm tra chạy được code php thì mình đã chạy lệnh hệ thống 
  nhưng bị ban system shell_exec passthru 

- lựa vừa khéo exec :>>
- và không rõ do web lag hay config không cho thực thi kiểu ls / luôn ra filetodo mà mình thử woai k được 
- nên đành phải thử cách dưới đây

![Alt text](<../image/41.3.png>)
![Alt text](<../image/41.4.png>)
![Alt text](<../image/41.5.png>)

#hackerga2101:
- làm thực tế đ có flag chán vl, trình ngu đ được tiền cũng chán
- nhìn mấy ae bên này bên kia càng chán hơn haizz 
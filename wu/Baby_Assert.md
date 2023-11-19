- tiêu đề : Baby Assert
- nội dung : RCE 

- bài này ae ngồi đọc lý thuyết về assert xíu là ngon 
- thì thường ngta dùng assert hay đi kèm vài hàm nữa kiểu : 
   assert("strpos('includes/$file.php,'..')===false)

- cái strpos là tránh path traversal 

- view qua cái web đã 

![Alt text](<../image/38.1.png>)

- vì đoán đoán cấu trúc rồi nên mình inject luôn :> 
-  'and die(show_source('/etc/passwd')) or '  -> câu lệnh sẽ thành : assert("strpos('includes'' and die(show_source('/etc/passwd')) or '.php,'..')===false)
- giải thích xíu nghĩa là nó include '' sau đó die(show_source()) và show cái etc/passwd hoặc là '.php' 

![Alt text](<../image/38.2.png>)

- thật ra tới bước này xong bí vch :> tìm thử mãi mấy file log xem include php dc không đuma 
- nhưng mình k biết rằng có thể die(system()) :>> mới mẻ thật 
 
![Alt text](<../image/38.3.png>)

- và pem vào 

![Alt text](<../image/38.4.png>)

- lụm cờ thhh 

#hackerga2101:
- mới mẻ die(system()) hehe
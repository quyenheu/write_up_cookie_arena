- tiêu đề : Magic Login
- nội dung : RCE to đọc /flag.txt :v

- bài này cần vài trick về weak compare và hash của php 
- FACT : me đầu nhìn version 7.4.34 mình thấy hàm mysql_escape.. bị loại từ 7.0.0 tưởng lỗi ở đó chứ 

- ae view source sẽ có luôn code nhé 

![Alt text](<../image/24.1.png>)

- mình để ý thấy nó hash thường không điều kiện 
- và bên dưới là so sánh yếu == "0" 

- giờ đi search xem thằng nào hash ra được 0e... không ( vì 0e1231231 trong php nó sẽ hiểu là float )

- ![Alt text](<../image/24.2.png>)
- test thử 
![Alt text](<../image/24.3.png>)

- pem vào thì okay đã được chuyển qua trang upload 

- ![Alt text](<../image/24.4.png>)

- mà chỗ này cho upload thoải mái 
- mình up nội dung phpinfo() test thử 
![Alt text](<../image/24.6.png>)
- pem và thành công thực thi code php 
![Alt text](<../image/24.7.png>)

- giờ đổi nội dung thành system('cat /flag.txt') hoi 

![Alt text](<../image/24.8.png>)
- và lụm cờ 

#hackerga2101:
- thêm 1 trick lỏ với con số hash ra 0e... 
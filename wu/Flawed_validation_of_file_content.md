- tiêu đề : Flawed validation of file content 
- nội dung : chơi tool đi bạn :> RCE to rít flag 

- đây là web cho upload ảnh và nó cấm vài cái nhé 
- như nội dung đã đề cập là nó check mấy cái byte đặc trưng của file 

- trước tiên cta sử dụng exiftool ( apt install exiftool :> )

![Alt text](<../image/33.1.png>)

- bắt buộc thêm __halt_compiler() không thực thi php sau nếu không nó trả dạng khác là mệt 

- okay giờ upload thoi 

![Alt text](<../image/33.2.png>)

- đổi đuôi file a.jpg.php

![Alt text](<../image/33.3.png>)

- chứng mình được thực thi code òi 

![Alt text](<../image/33.4.png>)

- thì pem và lụm cờ thoi 

#hackerga2101 

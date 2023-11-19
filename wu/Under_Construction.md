- tiêu đề : Underground 
- nội dung : đọc /flag.txt 

- vẫn là bước view qua web đã 
- mình vào chả có chức năng gì nên lục lọi trong source và ra 1 link ảnh ( đôi khi link ảnh cũng rất quan trọng :v )

![Alt text](<../image/17.1.png>)

- okay có vẻ nó đang cố gọi đến 1 cái ảnh bằng đường dẫn ? 
- vậy mình path traversal để thay đổi xem sao 

![Alt text](<../image/17.2.png>)

- ping pong vậy thật sự là kéo được /etc/passwd về nhưng ở định dạng ảnh 
- tiếp đó kéo thử /flag.txt xem sao 

![Alt text](<../image/17.3.png>)

- okay vẫn thoải mái , giờ đến khâu xử lý đọc nội dung 
- thì ae tải về thôi , sau đó sửa tên file ảnh thành .txt 

![Alt text](<../image/17.4.png>)

- và lụm cờ 

#hackerga2101:
- tự động thì nên bỏ qua mà test tay thì ae cũng để ý mấy file ảnh nhé :v 
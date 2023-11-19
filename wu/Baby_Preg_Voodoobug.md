- tiêu đề : Baby Preg Voodoobug = không baby lém :v 
- nội dung : RCE nhé 

- uhm bài này mình đánh giá là not too easy vì cũng mất kha khá tgian ngồi đọc document ( mấy ông anh giải trước trình cao vlin đánh giá dễ làm e hí hửng đâm vào làm )
- trước tiên là view web và dùng thử : thì đây là tính năng thay thế chữ ở văn bản , ngoài ra không có gì nữa 
- mình nhập loạn lên xíu thì nó bắn ra lỗi của hàm preg_replace() ( thật ra đầu mình thử /../ thì thấy lỗi :v )

![Alt text](<../image/19.6.png>)

- rồi quay lại kiểm tra version thì phát hiện web sử dụng php 5.3.27 khá cũ 

![Alt text](<../image/19.1.png>)

- okay giờ đi research xem hàm preg_replace có lỗi gì không ( ctf không lỗi thì loạn :> )

- mình tìm ra khá nhiều bài viết về lỗi của hàm này trước phiên bản 5.5.0 và hoàn toàn bị fix ở 7.0.0 ( không nhớ cụ thể :v )

![Alt text](<../image/19.4.png>)

- ae hỏi gpt là biết ngay 
- cụ thể là có flag e tích hợp thực thi eval trong pre_replace() khá cuốn r ấy :> 
- đọc mất lúc lâu thì mình thử khai thác 

![Alt text](<../image/19.2.png>)

- hehe nó văng lỗi mình dùng sai kìa 

- tiếp đó mình thử echo 123 và thật sự nó đã replace thành 123123

- okay cat flag thoi 

![Alt text](<../image/19.5.png>)

- và lụm cờ 

- EXPLAIN :  eval của flag "\e", phần replacement của preg_replace. Trong replacement, bạn có thể sử dụng mã PHP trong dấu ngoặc kép và nó sẽ được thực thi bởi eval và kết quả của nó sẽ được sử dụng để thay thế cho kết hợp regex tìm thấy.

- thôi ae tự chat gpt nhé chứ giải thích ngu qué :v 

#hackerga2101:
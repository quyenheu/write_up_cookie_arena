- tiêu đề : Modify user role 
- nội dung : có quyền admin đọc /flag

- FUN FACT : bài nè mình không thích lắm vì chuyển roleID về 0 không được gì tưởng mình sai hướng ( má roleID của admin = 2 ạ )

- trước tiên thì cứ login xem có gì không đã với guest:guest 
- thì mình thấy có chức năng cập nhật email okay burp mode và test thử 
- mình thêm trường role = 2 vào ( tại sao là role không phải id , roleID ,... vì mình thử jwt cái session thấy dạng nó vậy :v )

![Alt text](<../image/36.1.png>)

- okay thành công đổi cả email lẫn roleID 

![Alt text](<../image/36.2.png>)

- và vào /flag lụm cờ thoi 

![Alt text](<../image/36.3.png>)

- sự thật là mình đã oằn ẹo làm xem có XSS fetch /flag được không :>> 

![Alt text](<../image/36.4.png>)

#hackerga2101:
- độ làm dự án nên k ra wu thường xuyên hehe :>
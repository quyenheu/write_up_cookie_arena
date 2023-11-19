- tiêu đề : The Existed File 
- nội dung : cmdi 

- trước tiên mình đọc source cái đã 

![Alt text](<../image/53.6.png>)

- file_path.translate({ord(c): None for c in string.whitespace}) dòng này đã filter mất space \t \r \n
- nên bị hạn chế khá nhiều trong việc injection 
- mình quyết định ngồi đọc thêm payload từ chính cóc ki luôn 

![Alt text](<../image/53.5.png>)

- mình thấy có thằng $() dùng để chèn lệnh 
- hmm vậy ls -l $() có nghĩa là thực thi lệnh trong $() sau đó ls -l $() 
- curl thử ra ngoài xem sao 

![Alt text](<../image/53.1.png>)

- và thực sự nó thực thi lệnh $()

![Alt text](<../image/53.2.png>)

- ez rr giờ chỉ cần gửi /flag.txt ra là lụm th 

![Alt text](<../image/53.3.png>)
![Alt text](<../image/53.4.png>)

#hackerga2101:
- tiêu đề : Obfuscating file extensions 
- nội dung : RCE to đọc flag :> 

- bài này luồn lách tí là win mè 

- nếu upload file đuôi .php thì nó loại luôn bỏ .php để lại mỗi tên file 

![Alt text](<../image/29.1.png>)

- tình huống này ae làm mãi r mà 
- đổi lại đuôi file để lách luật thoi , ví dụ : ok.p.phphp
thì nó bỏ cái .php lại được .php mới :v 

![Alt text](<../image/29.2.png>)

- và kết quả là 

![Alt text](<../image/29.3.png>)

- okay đổi payload qua system() để đấm 

![Alt text](<../image/29.4.png>)

- pem và lụm so ez

#hackerga2101:
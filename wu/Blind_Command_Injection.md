- tiêu đề : Blind Command Injection = lessin command injection
- nội dung : lại là đọc /flag.txt 

- HINT : 
   + nếu ae thêm vào URL ?cmd=[hackerga2101] thì sẽ in ra hackerga2101 ( method GET )
   + giờ dùng burp chỉnh method thì sẽ thực thi lệnh bằng os.system() nhưng sẽ không trả về gì vì không có hàm print 
   
- user input rời ngay vào hàm system() là biết cook òi 

- view qua và thử với method GET tí đã 

![Alt text](<../image/12.1.png>)

- này thì dùng bin/bash theo tiêu chí sau : 
  + cắt từng kí tự ở /flag.txt 
  + so sánh với list char mình chuẩn bị 
  + nếu giống thì sleep 3s
  + không thì làm gì cũng được 

- để tiện thì mình code python luôn nhá : 

![Alt text](<../image/12.2.png>)

- pem và đợi lúc lụm cờ hoi 
- FUN FACT : đợi lâu vc , mình để range(1,50) còn không đủ , Cookie ác quá 

#hackerga2101:
- ae học thêm bin/bash , sh nhé dùng nhiều trường hợp lắm :v 
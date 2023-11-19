- tiêu đề : Spookifier
- nội dung : đọc file /flag.txt 

ssti tree detech

![Alt text](<../image/50.1.png>)

trước tiên thử payload thì cứ fuzz bừa kí tự đặc biệt @#$\%{} nhận thấy có $ {} không bị ban 
nên mình thử ${7*7}

![Alt text](<../image/50.2.png>)

sau đó lại theo ssti tree mình thử detech để biết chuẩn công nghệ là gì 

![Alt text](<../image/50.3.png>)

-> đến đây xác định rõ là template mako trong python ròi 

giờ vác payload vào fuzz trong intruder 

![Alt text](<../image/50.4.png>)

thì ngay cái payload đầu tiên server đã trả về kết quả mà không bị 500 

sửa sang lại chút vì nếu để nguyên chỉ trả kết quả 0 :v 

-> ${self.module.cache.util.os.popen("cat /flag.txt").open()}

pem và lụm cờ th 

![Alt text](<../image/50.5.png>)

#hackerga2101: 
- nguồn payload mình lấy từ trang tổng hợp  https://github.com/swisskyrepo/PayloadsAllTheThings/tree
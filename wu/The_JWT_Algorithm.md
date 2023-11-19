- tiêu đề : The JWT Algorithm
- nội dung : hóa thân thành admin

- bài này không dễ như điểm bên cookie để, vì nếu không biết 1 vài trick thì ngỏm 
- trước tiên vào view page ta có 1 ô login 
- mình đoán là login vào lấy jwt để hóa thân thành admin nên thử guest:guest (như các tài khoản guest ở lab khác)
- nhưng nó éo vào được :> và cũng không thấy nhiều attack surface, mình ra đát boa của burp (pro nha :>) thấy có /robots.txt
- và vào thử 

![Alt text](<../image/42.1.png>)

- có thư mục /secret và mình hồn nhiên vào thì nhận thông báo bạn k phải bot 
- hmm vậy lên gg tra và cóp 1 cái user-agent googlebot vào . thành công vào trang và nhận được tài khoản mật khẩu login 

![Alt text](<../image/42.2.png>)

- và mình có được jwt 
- giờ đến đoạn thêm sửa xóa. mình thử xóa trước xem sao, mình xóa cookie session thì vẫn nhận được thông báo bạn không phải admin -> việc xác thực đang không có lỗi 
- giờ vào jwt.io để dịch xem sao 
- và loay hoay brute force thử secret key mãi mà không được nên mình đi research 
- mình đọc được 1 bài viết về alg : none 1 phương thức khác mà có thể bỏ qua xác thực của secret key (link xíu để dưới nhé)

![Alt text](<../image/42.7.png>)

- okay test thử cách này nhưng thằng jwt.io nó không dịch cho bản nếu để none đâu :> 

![Alt text](<../image/42.3.png>)

- nên mình làm như nè 

![Alt text](<../image/42.4.png>)

- muốn sửa phần nào thì vứt nó xuống payload và sửa lấy giá trị ở giữa 2 . là được
- và đương nhiên là chỉnh user : admin

- pem và lụm cờ thoi 

![Alt text](<../image/42.6.png>)

#hackerga2101:
- link nè: https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries/
- cookie toàn cao thủ nên lab bị underrate qué 

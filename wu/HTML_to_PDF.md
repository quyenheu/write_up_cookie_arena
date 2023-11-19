- tiêu đề : HTML to PDF
- nội dung : đọc /flag.txt 

- bài này khá hay hehe 
- trước tiên thì vào thử web tính năng là crawl html từ 1 url mình cung cấp chuyển về dạng pdf và tải xuống 
- nói chung là mình cũng đi research để biết cách làm chứ không tự nghĩ được :v 

- tổng quan cách làm là cho nó lấy html từ web do mình điều khiển và nội dung html có thể fetch được đến file /flag.txt 
- xíu bài mình đọc sẽ để ở dưới nhe 

- đầu tiên là tạo web do mình điều khiển (này làm lab cookie nhưng dùng server portswigger :>> burp collaborator cũng được nhe)

![Alt text](<../image/48.1.png>)

- ae vào 1 lab nào có server ấy và chỉnh như trên và chúng ta sẽ có web kiur 

![Alt text](<../image/48.2.png>)

- để url này vào challenge đang làm để lấy pdf 

![Alt text](<../image/48.3.png>)

- tiếp phải dịch pdf ra kiểu đọc được nhé 

![Alt text](<../image/48.4.png>)

- và cat phờ nhác thôi 

![Alt text](<../image/48.5.png>)

#hackerga2101: 
- link bài mình đọc 
- https://securitytaters.info/solving-url-to-pdf-from-fireshell-ctf-2020.html
- cái nè đủ hơn (có cả kiểu xss to lfi nữa) : https://blog.shoebpatel.com/2020/03/23/FireShell-CTF-2020-Write-up/
- và đây là câu doc dẫn tới vụ việc pdf này : 
" Attachments are related files, embedded in the PDF itself. They can be specified through <link rel=attachment> elements to add resources globally or through regular links with <a rel=attachment> to attach a resource that can be saved by clicking on said link. The title attribute can be used as description of the attachment. " 
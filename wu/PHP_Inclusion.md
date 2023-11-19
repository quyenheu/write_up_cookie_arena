- tiêu đề : PHP Inclusion 
- nội dung : wrapper nhé 

- trước tiên mình xem qua và dùng thử web 
- đến trang view sẽ có 2 para là page và file 
- mình cứ thêm flag vào bên file là permission nên đoán nó regex từ đó 

![Alt text](<../image/13.2.png>)

- tạm bỏ qua thằng file mình qua thử thằng page 

- thử cái wrapper php://filter/base64.encode-convert/resource=index.php thì chả được gì 
- uhm mà theo chút kiến thức làm lab thường nó hay include mà cung cấp sẵn đuôi file 

- mình thử để là php://filter/base64.encode-convert/resource=index -> thành công có được code index.php

- giờ đến lúc tìm code file flag.php òi 
- loay hoay lúc thì mình tìm ra php://filter/base64.encode-convert/resource=./uploads/flag.php
- decode base64

![Alt text](<../image/13.3.png>)

- và lụm cờ th 

#hackerga2101
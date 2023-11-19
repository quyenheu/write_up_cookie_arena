- tiêu đề : Nginx Alias 
- nội dung : đọc flag ở app/run.py

- uhm bài này thì tra mạng là ra nhá nó là cve mà 

- There is a directory traversal vulnerability to read arbitrary files via a misconfigured NGINX alias, as demonstrated by api-third-party/download/extdisks../etc/config/account. With this vulnerability, the attacker can bypass authentication.

- đây là cái mình tra được , kiểu alias bị lỗi là app/static../run.py = app/run.py

![Alt text](<../image/7.2.png>)

#hackerga2101:
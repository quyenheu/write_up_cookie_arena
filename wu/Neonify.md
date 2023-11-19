- tiêu đề : Neonify
- nội dung : RCE :v 

- trước tiên thì view và trải nghiệm thử cái web đã 
- đây là web render lại chữ đẹp à :v nhưng ngoài chữ và số thì các ký tự khác đều là nguy hiểm 
- nên mình research tí thì thấy thông tin source regex của nó :v neon.rb 

![Alt text](<../image/40.2.png>)

- uhm có vẻ nó đặt dấu $ hơi có vấn đề rr 

![Alt text](<../image/40.1.png>)

- có được cách bypass regex là xong game luôn roi mình đi test thử 
- a%0ab%0ac xem nó có in ra 3 chữ cái a b c ở 3 dòng không đã

![Alt text](<../image/40.3.png>)

- okay thành công giờ táng luôn thử SSTI xem sao 
- <%= 7*7 %>

![Alt text](<../image/40.4.png>)

- 49 luôn òi :> 
- thực thi là cook thoi mình táng payload với dấu backtick 

![Alt text](<../image/40.5.png>)
![Alt text](<../image/40.6.png>)

- lụm cờ th 

#hackerga2101: 
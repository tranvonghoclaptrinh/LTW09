# LTW09 — Portfolio Trần Hữu Vọng

Đây là portfolio cá nhân của **Trần Hữu Vọng**, lớp **15DHTH07**, giới tính **Nam**, sở thích **nghe nhạc**, quê hương **Đồng Nai**.

## Công nghệ sử dụng

Dự án chỉ sử dụng **HTML**, **CSS**, **JavaScript**, **Bootstrap 5** và **JSON**. Không cần cài đặt Node.js, React, TypeScript hoặc công cụ build.

## Cấu trúc thư mục

| Tệp hoặc thư mục | Vai trò |
|---|---|
| `index.html` | Trang portfolio chính |
| `css/bootstrap.min.css` | Bootstrap 5 cục bộ |
| `css/style.css` | CSS giao diện riêng |
| `js/bootstrap.bundle.min.js` | Bootstrap 5 JavaScript cục bộ |
| `js/app.js` | JavaScript render thẻ bài tập |
| `data/assignments.json` | Dữ liệu JSON mẫu để cập nhật sau này |

## Chạy dự án

Mở trực tiếp tệp `index.html` bằng trình duyệt. Nếu muốn dùng máy chủ tĩnh, có thể sử dụng Live Server trong Visual Studio Code.

Hiện tại các thẻ bài tập được nhập thủ công trong `js/app.js`. Khi muốn chuyển sang dữ liệu JSON, dùng hàm `fetch('data/assignments.json')` theo phần chú thích có sẵn trong tệp JavaScript.

Trang đề tài quê hương được liên kết tại: [detaiquehuong](https://tranvonghoclaptrinh.github.io/detaiquehuong/).

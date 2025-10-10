## 🎯 Mục tiêu của MVP
Phiên bản **MVP (Minimum Viable Product)** tập trung cung cấp **những tính năng cốt lõi nhất** giúp người dùng:
- Tìm kiếm, tải lên và chia sẻ tài liệu học tập.
- Tiết kiệm thời gian tìm nguồn học uy tín.
- Tạo nền tảng cơ sở cho việc mở rộng sau này (như bình luận, xếp hạng, chat nhóm, AI gợi ý tài liệu,…).


## 🧮 Impact-Effort Matrix

| Tính năng | Mức tác động (Impact) | Nỗ lực phát triển (Effort) | Ưu tiên | Giải thích |
|------------|------------------------|------------------------------|----------|-------------|
| **1. Đăng ký / Đăng nhập người dùng( Sign up/ Log in)** | Cao | Cao | ⭐️⭐️⭐️⭐️ | Cần thiết để xác định người dùng, lưu tài liệu, theo dõi hoạt động. Là nền tảng cho các tính năng khác. |
| **2. Tải lên tài liệu (Upload)** | Cao | Cao | ⭐️⭐️⭐️⭐️⭐️ | Là tính năng **cốt lõi**, cho phép chia sẻ tài liệu – đúng trọng tâm ứng dụng. |
| **3. Duyệt & tải tài liệu (Browse & Download)** | Cao | Cao | ⭐️⭐️⭐️⭐️⭐️ | Giúp người dùng tiếp cận tài liệu do cộng đồng chia sẻ. Không thể thiếu trong bản đầu. |
| **4. Tìm kiếm tài liệu (Search)** | Cao | Cao | ⭐️⭐️⭐️⭐️ | Nâng trải nghiệm người dùng, dễ tìm đúng nội dung cần học. Ưu tiên ngay từ đầu. |
| **5. Gắn thẻ / phân loại theo môn học (Tagging)** | Cao | Thấp | ⭐️⭐️⭐️ | Giúp tổ chức tài liệu dễ truy cập, nhưng có thể mở rộng dần. |
| **6. Hồ sơ cá nhân (Profile)** | Thấp | Cao | ⭐️ | Củng cố sự cá nhân hóa, cho phép người dùng xem tài liệu mình đăng, và các thông tin cơ bản của người dùng. |
| **7. Giao diện thân thiện, tương thích đa thiết bị (User-friendly and Responsive UI)** | Cao | Cao | ⭐️⭐️⭐️⭐️ | Ứng dụng hướng đến sinh viên, nên cần dễ sử dụng trên điện thoại. |
| **8. Trang Giới thiệu / Hướng dẫn sử dụng (About / Help Page)** | Thấp | Thấp | ⭐️⭐️ | Cung cấp thông tin ngắn gọn về mục tiêu và cách dùng ứng dụng. Dễ triển khai nhưng tăng độ tin cậy và thân thiện cho người dùng mới. |



## 💡 Giải thích và Lý do chọn

### **1. Đăng ký / Đăng nhập người dùng**
- Cần để xác định người đăng và quản lý tài liệu.
- Cho phép lưu danh sách tài liệu cá nhân, kiểm soát nội dung tải lên.
- Tạo nền tảng cho các tính năng xã hội (như bình luận, đánh giá) về sau.

### **2. Tải lên tài liệu**
- Là **trọng tâm** của toàn bộ ứng dụng.
- Người dùng có thể chia sẻ file PDF, DOCX, PPT,...
- Cho phép thêm mô tả, tag để người khác dễ tìm.

### **3. Duyệt & tải tài liệu**
- Người dùng có thể xem danh sách tài liệu theo môn, trường, tác giả.
- Tải tài liệu về điện thoại hoặc máy tính để học offline.
- Đây là giá trị thực tế đầu tiên của ứng dụng.

### **4. Tìm kiếm tài liệu**
- Tìm theo từ khóa (tên môn, chủ đề, người đăng,...).
- Cực kỳ cần thiết khi số lượng tài liệu tăng lên.
- Nâng cao trải nghiệm và giữ chân người dùng.

### **5. Gắn thẻ (Tagging)**
- Giúp hệ thống tổ chức tài liệu hiệu quả, hỗ trợ tìm kiếm nhanh.
- Có thể thêm đơn giản qua trường “Tag” khi upload.
- Ít nỗ lực nhưng tạo tác động tích cực cho UX.

### **6. Hồ sơ cá nhân cơ bản**
- Cho phép người dùng xem thông tin cá nhân và danh sách tài liệu đã đăng.
- Là bước đầu để phát triển “hồ sơ học tập cá nhân” trong tương lai.

### **7. Giao diện thân thiện và tương thích đa thiết bị**
- Vì là ứng dụng học tập cho sinh viên, nên UI cần đơn giản, dễ hiểu, tương thích điện thoại.
- Cần tối ưu trải nghiệm ngay từ MVP để thu hút người dùng sớm.

### **8. Trang Giới thiệu / Hướng dẫn sử dụng**
- Giúp người dùng mới hiểu nhanh mục tiêu và cách sử dụng ứng dụng (đăng ký, tải lên, tìm kiếm,...).
- Có thể triển khai nhanh dưới dạng trang tĩnh (HTML/CSS).
- Dù tác động thấp, nhưng tăng **độ tin cậy, thân thiện và tính hoàn thiện** cho bản MVP.

## 🚀 Tổng kết ưu tiên MVP

**Các tính năng bắt buộc cho MVP (phiên bản đầu):**

1. Đăng ký / Đăng nhập  
2. Tải  tài liệu  
3. Duyệt & tải tài liệu  
4. Tìm kiếm tài liệu

**Các tính năng nên có (nice-to-have):**

5. Gắn thẻ theo môn học  
6. Hồ sơ cá nhân cơ bản  
7. Giao diện thân thiện và tương thích đa thiết bị  
8. Trang Giới thiệu / Hướng dẫn sử dụng

Những tính năng này đảm bảo **ứng dụng vận hành được, phục vụ đúng mục tiêu chia sẻ tài liệu học tập** và sẵn sàng mở rộng sau khi có phản hồi người dùng thực tế.
-- Insert admin user with BCrypt encrypted password (admin123)
INSERT IGNORE INTO user (username, email, password, full_name, role, profile_picture, is_active, created_at, updated_at)
VALUES (
    'admin',
    'admin@bku.edu.vn',
    '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdCvpn0MpK6TVAe', -- admin123
    'System Administrator',
    'ADMIN',
    '/images/admin-avatar.png',
    TRUE,
    NOW(),
    NOW()
);

-- Insert sample student users with encrypted passwords (student123)
INSERT IGNORE INTO user (username, email, password, full_name, role, is_active, created_at, updated_at) VALUES
('student01', 'student01@student.bku.edu.vn', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdCvpn0MpK6TVAe', 'Nguyen Van A', 'STUDENT', TRUE, NOW(), NOW()),
('student02', 'student02@student.bku.edu.vn', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdCvpn0MpK6TVAe', 'Tran Thi B', 'STUDENT', TRUE, NOW(), NOW()),
('student03', 'student03@student.bku.edu.vn', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdCvpn0MpK6TVAe', 'Le Van C', 'STUDENT', TRUE, NOW(), NOW());

-- Insert sample categories
INSERT IGNORE INTO category (category_name, description, created_by, created_at) VALUES
('Lecture Notes', 'Course lecture materials and notes', 1, NOW()),
('Assignments', 'Student assignments and homework', 1, NOW()),
('Research Papers', 'Academic research papers and publications', 1, NOW()),
('Tutorials', 'Step-by-step guides and tutorials', 1, NOW()),
('Exam Preparation', 'Past papers and exam preparation materials', 1, NOW()),
('Projects', 'Student projects and capstone works', 1, NOW()),
('Lab Manuals', 'Laboratory guides and manuals', 1, NOW()),
('Textbooks', 'Digital textbooks and reference materials', 1, NOW());

-- Insert sample documents
INSERT IGNORE INTO document (title, description, file_type, file_path, file_size, category_id, uploaded_by, is_approved, created_at, updated_at) VALUES
('Introduction to Programming', 'Basic programming concepts and examples', 'PDF', '/documents/programming-intro.pdf', 2048576, 1, 2, TRUE, NOW(), NOW()),
('Data Structures Assignment', 'Assignment on linked lists and trees', 'WORD', '/documents/ds-assignment.docx', 1048576, 2, 2, TRUE, NOW(), NOW()),
('AI Research Paper', 'Recent advances in machine learning', 'PDF', '/documents/ai-research.pdf', 5097152, 3, 3, FALSE, NOW(), NOW());

-- Insert sample document access
INSERT IGNORE INTO document_access (document_id, user_id, can_view, can_download, can_edit, granted_at, granted_by) VALUES
(1, 2, TRUE, TRUE, FALSE, NOW(), 1),
(1, 3, TRUE, TRUE, FALSE, NOW(), 1),
(2, 3, TRUE, FALSE, FALSE, NOW(), 1);
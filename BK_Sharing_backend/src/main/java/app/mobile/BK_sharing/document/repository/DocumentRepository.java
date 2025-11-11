package app.mobile.BK_sharing.document.repository;

import app.mobile.BK_sharing.document.entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {
    List<Document> findByUploadedByUserId(Long userId);
    List<Document> findByCategoryCategoryId(Long categoryId);
    List<Document> findByIsApproved(Boolean isApproved);
    List<Document> findByTitleContainingIgnoreCase(String title);
    List<Document> findByFileType(Document.FileType fileType);
}
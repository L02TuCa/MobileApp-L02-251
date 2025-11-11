package app.mobile.BK_sharing.document.repository;

import app.mobile.BK_sharing.document.entity.DocumentAccess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DocumentAccessRepository extends JpaRepository<DocumentAccess, Long> {
    List<DocumentAccess> findByDocumentDocumentId(Long documentId);
    List<DocumentAccess> findByUserUserId(Long userId);
    Optional<DocumentAccess> findByDocumentDocumentIdAndUserUserId(Long documentId, Long userId);
    boolean existsByDocumentDocumentIdAndUserUserId(Long documentId, Long userId);
}
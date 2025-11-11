package app.mobile.BK_sharing.document.repository;

import app.mobile.BK_sharing.document.entity.DocumentVersion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DocumentVersionRepository extends JpaRepository<DocumentVersion, Long> {
    List<DocumentVersion> findByDocumentDocumentId(Long documentId);
    Optional<DocumentVersion> findByDocumentDocumentIdAndVersionNumber(Long documentId, Integer versionNumber);
    List<DocumentVersion> findByEditedByUserId(Long userId);
}
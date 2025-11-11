package app.mobile.BK_sharing.document.repository;

import app.mobile.BK_sharing.document.entity.DocumentInteraction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DocumentInteractionRepository extends JpaRepository<DocumentInteraction, Long> {
    List<DocumentInteraction> findByDocumentDocumentId(Long documentId);
    List<DocumentInteraction> findByUserUserId(Long userId);
    List<DocumentInteraction> findByInteractionType(DocumentInteraction.InteractionType interactionType);
}
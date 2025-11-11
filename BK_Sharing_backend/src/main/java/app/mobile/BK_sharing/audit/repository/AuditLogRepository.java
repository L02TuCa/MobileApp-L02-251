package app.mobile.BK_sharing.audit.repository;

import app.mobile.BK_sharing.audit.entity.AuditLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuditLogRepository extends JpaRepository<AuditLog, Long> {
    List<AuditLog> findByAdminUserId(Long adminId);
    List<AuditLog> findByActionType(AuditLog.ActionType actionType);
    List<AuditLog> findByRelatedDocumentDocumentId(Long documentId);
}
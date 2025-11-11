package app.mobile.BK_sharing.audit.entity;

import app.mobile.BK_sharing.document.entity.Document;
import app.mobile.BK_sharing.user.entity.User;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "AuditLog")
@Data
public class AuditLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long auditId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "adminId", nullable = false)
    private User admin;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ActionType actionType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "relatedDocumentId")
    private Document relatedDocument;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "relatedUserId")
    private User relatedUser;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String actionDetails;

    @CreationTimestamp
    private LocalDateTime actionAt;

    public enum ActionType {
        APPROVE_DOCUMENT, DELETE_DOCUMENT, GRANT_ACCESS, REVOKE_ACCESS
    }
}
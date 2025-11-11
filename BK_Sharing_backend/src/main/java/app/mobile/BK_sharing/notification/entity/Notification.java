package app.mobile.BK_sharing.notification.entity;

import app.mobile.BK_sharing.document.entity.Document;
import app.mobile.BK_sharing.user.entity.User;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "Notification")
@Data
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long notificationId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId", nullable = false)
    private User user;

    @Column(nullable = false, length = 255)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String message;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private NotificationType type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "relatedDocumentId")
    private Document relatedDocument;

    @Column(nullable = false)
    private Boolean isRead = false;

    @CreationTimestamp
    private LocalDateTime createdAt;

    public enum NotificationType {
        DOCUMENT_APPROVED, DOCUMENT_UPDATED, ACCESS_GRANTED
    }
}
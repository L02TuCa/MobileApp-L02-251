package app.mobile.BK_sharing.document.entity;

import app.mobile.BK_sharing.user.entity.User;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "DocumentAccess")
@Data
public class DocumentAccess {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accessId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "documentId", nullable = false)
    private Document document;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "userId", nullable = false)
    private User user;

    @Column(nullable = false)
    private Boolean canView = false;

    @Column(nullable = false)
    private Boolean canDownload = false;

    @Column(nullable = false)
    private Boolean canEdit = false;

    @CreationTimestamp
    private LocalDateTime grantedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "grantedBy", nullable = false)
    private User grantedBy;
}
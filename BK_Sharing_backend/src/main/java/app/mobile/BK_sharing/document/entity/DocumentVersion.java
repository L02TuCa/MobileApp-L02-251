package app.mobile.BK_sharing.document.entity;

import app.mobile.BK_sharing.user.entity.User;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "DocumentVersion")
@Data
public class DocumentVersion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long versionId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "documentId", nullable = false)
    private Document document;

    @Column(nullable = false)
    private Integer versionNumber;

    @Column(nullable = false, length = 500)
    private String filePath;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "editedBy", nullable = false)
    private User editedBy;

    @CreationTimestamp
    private LocalDateTime editedAt;

    @Column(columnDefinition = "TEXT")
    private String changeDescription;
}
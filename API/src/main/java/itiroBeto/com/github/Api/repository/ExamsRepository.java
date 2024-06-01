package itiroBeto.com.github.Api.repository;

import itiroBeto.com.github.Api.model.Exams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExamsRepository extends JpaRepository<Exams, Long> {
    List<Exams> findByConsultationId(Long consultationId);
}
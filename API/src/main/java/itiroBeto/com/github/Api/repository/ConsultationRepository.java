package itiroBeto.com.github.Api.repository;

import itiroBeto.com.github.Api.model.Consultation;
import itiroBeto.com.github.Api.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConsultationRepository extends JpaRepository<Consultation, Long> {

    List<Consultation> findByPatientId(Long patientId);

}
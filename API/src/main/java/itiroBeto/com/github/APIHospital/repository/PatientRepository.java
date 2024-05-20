package itiroBeto.com.github.APIHospital.repository;

import itiroBeto.com.github.APIHospital.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {


}

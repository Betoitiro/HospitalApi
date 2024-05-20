package itiroBeto.com.github.APIHospital.repository;

import itiroBeto.com.github.APIHospital.model.Doctor;
import itiroBeto.com.github.APIHospital.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}

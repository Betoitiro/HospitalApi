package itiroBeto.com.github.Api.repository;

import itiroBeto.com.github.Api.model.Doctor;
import itiroBeto.com.github.Api.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}
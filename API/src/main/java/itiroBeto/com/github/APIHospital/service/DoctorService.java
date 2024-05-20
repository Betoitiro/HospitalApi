package itiroBeto.com.github.APIHospital.service;

import itiroBeto.com.github.APIHospital.model.Doctor;
import itiroBeto.com.github.APIHospital.model.Patient;
import itiroBeto.com.github.APIHospital.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {

    @Autowired
    DoctorRepository doctorRepository;

    public void create (Doctor doctor){
        doctorRepository.save(doctor);
    }

    public List<Doctor> findAll(){
        return doctorRepository.findAll();
    }

    public Optional<Doctor> findById(Long id){
        return doctorRepository.findById(id);
    }

    public void deleteById(Long id){
        doctorRepository.deleteById(id);
    }

    public void updated(Long id, Doctor doctor){
        Optional<Doctor> doctorFromDB = findById(id);

        if (doctorFromDB.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

        Doctor doctorUpdated = doctorFromDB.get();

        doctorUpdated.setName(doctor.getName());
        doctorUpdated.setEmail(doctor.getEmail());
        doctorUpdated.setCrm(doctor.getCrm());
        doctorUpdated.setTime(doctor.getTime());

        doctorRepository.save(doctorUpdated);
    }


}

package itiroBeto.com.github.APIHospital.service;

import itiroBeto.com.github.APIHospital.model.Patient;
import itiroBeto.com.github.APIHospital.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService {
    @Autowired
    PatientRepository patientRepository;

    public void create(Patient patient){
        patientRepository.save(patient);
    }

    public List<Patient> findAll(){
        return patientRepository.findAll();
    }

    public Optional<Patient> findByid(Long id){
        return patientRepository.findById(id);
    }

    public void updated(Long id, Patient patient){
        Optional<Patient> patientFromDb = findByid(id);

        if(patientFromDb.isEmpty()){
            throw  new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        Patient patientUpdated = patientFromDb.get();

        patientUpdated.setName(patient.getName());
        patientUpdated.setEmail(patient.getEmail());
        patientUpdated.setEnderece(patient.getEnderece());
        patientUpdated.setGender(patient.getGender());

        patientRepository.save(patientUpdated);
    }

    public void deleteById(Long id){
        patientRepository.deleteById(id);
    }
}

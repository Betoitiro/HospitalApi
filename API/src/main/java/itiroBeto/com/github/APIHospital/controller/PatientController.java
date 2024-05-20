package itiroBeto.com.github.APIHospital.controller;

import itiroBeto.com.github.APIHospital.model.Patient;
import itiroBeto.com.github.APIHospital.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patient")
@CrossOrigin(origins = "http://localhost:3000")
public class PatientController {
    @Autowired
    PatientService patientService;

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void create(@RequestBody Patient patient){
        patientService.create(patient);
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<Patient> findAll(){
        return patientService.findAll();
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updated( @RequestBody Patient patient, @PathVariable Long id){
        patientService.updated(id, patient);
    }


    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id){
        patientService.deleteById(id);
    }

}

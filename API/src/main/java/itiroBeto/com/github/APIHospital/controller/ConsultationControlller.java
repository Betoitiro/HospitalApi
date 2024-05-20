package itiroBeto.com.github.APIHospital.controller;

import itiroBeto.com.github.APIHospital.model.Consultation;
import itiroBeto.com.github.APIHospital.model.Doctor;
import itiroBeto.com.github.APIHospital.service.ConsultationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/consultation")
@CrossOrigin(origins = "http://localhost:3000")
public class ConsultationControlller {
    @Autowired
    ConsultationService consultationService;

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void create(@RequestBody Consultation consultation){
        consultationService.create(consultation);
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<Consultation>findAll(){
        return consultationService.findAll();
    }


    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        consultationService.deleteConsultation(id);
    }


    //Administrative operational departament
    @PutMapping("/changeState/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Optional<Consultation> changeState(@PathVariable Long id){
        return consultationService.changeState(id);
    }

    @PutMapping("/cancelledState/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public Optional<Consultation> cancelledState(@PathVariable Long id){
        return consultationService.cancelledState(id);
    }
    //Doctor operational departament

    @GetMapping("/findhistorycpatient/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<Consultation> findHistoryPatientId(@PathVariable Long id){
        return consultationService.findHistoryPatientId(id);
    }


}

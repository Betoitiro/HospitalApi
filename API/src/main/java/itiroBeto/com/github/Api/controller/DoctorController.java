package itiroBeto.com.github.Api.controller;
import itiroBeto.com.github.Api.model.Doctor;
import itiroBeto.com.github.Api.model.Patient;
import itiroBeto.com.github.Api.service.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctor")
@CrossOrigin(origins = "http://localhost:3000")

public class DoctorController {
    @Autowired
    DoctorService doctorService;


    //Doctor administrative departament
    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody Doctor doctor){
        doctorService.create(doctor);
    }

    @GetMapping("/all")
    @ResponseStatus(HttpStatus.OK)
    public List<Doctor> findAll(){
        return doctorService.findAll();
    }


    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updated(@RequestBody Doctor doctor, @PathVariable Long id){
        doctorService.updated(id, doctor);
    }



}

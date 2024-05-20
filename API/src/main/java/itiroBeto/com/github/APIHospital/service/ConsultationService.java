package itiroBeto.com.github.APIHospital.service;

import itiroBeto.com.github.APIHospital.enums.ConsultationPatientStatusEnum;
import itiroBeto.com.github.APIHospital.model.Consultation;
import itiroBeto.com.github.APIHospital.repository.ConsultationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;
import java.util.Optional;

@Service
public class ConsultationService {
    @Autowired
    ConsultationRepository consultationRepository;

    public void create (Consultation consultation){
        consultation.setStatus(ConsultationPatientStatusEnum.CONFIRMADA);
        consultationRepository.save(consultation);
    }

    public List<Consultation> findAll(){
        return consultationRepository.findAll();
    }

    public Optional<Consultation> changeState(Long id){
        Optional<Consultation> optionalConsultation = consultationRepository.findById(id);
        if (optionalConsultation.isPresent()){ // Verifica se a consulta está presente
            Consultation existingConsultation = optionalConsultation.get();
            existingConsultation.setStatus(ConsultationPatientStatusEnum.REALIZADA);
            consultationRepository.save(existingConsultation);
        }
        return optionalConsultation;
    }

    public Optional<Consultation> cancelledState(Long id){
        Optional<Consultation> optionalConsultation = consultationRepository.findById(id);
        if (optionalConsultation.isPresent()){
            Consultation cancellConsultation = optionalConsultation.get();
            cancellConsultation.setStatus(ConsultationPatientStatusEnum.CANCELADA);
            consultationRepository.save(cancellConsultation);
        }
        return optionalConsultation;
    }

    public Optional<Consultation> findById(Long id){
        return consultationRepository.findById(id);
    }

    public void deleteConsultation(Long id){
        consultationRepository.deleteById(id);
    }

    //Doctor departament
    public List<Consultation> findHistoryPatientId(Long id){
        return consultationRepository.findByPatientId(id);
    }
}

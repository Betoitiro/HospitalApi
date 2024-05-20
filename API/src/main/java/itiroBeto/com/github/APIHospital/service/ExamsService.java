package itiroBeto.com.github.APIHospital.service;

import itiroBeto.com.github.APIHospital.enums.ExamsPatientStatusEnum;
import itiroBeto.com.github.APIHospital.model.Exams;
import itiroBeto.com.github.APIHospital.repository.ExamsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExamsService {
        @Autowired
        ExamsRepository examsRepository;

        public void createExams(Exams exams){
            exams.setStatus(ExamsPatientStatusEnum.PENDENTE);
            examsRepository.save(exams);
        }

        public Optional<Exams> changeStateExams (Long id){
            Optional<Exams> examsFromDb = examsRepository.findById(id);
            if (examsFromDb.isPresent()){
                Exams examsRealization = examsFromDb.get();
                examsRealization.setStatus(ExamsPatientStatusEnum.REALIZADO);
                examsRepository.save(examsRealization);
            }
            return examsFromDb;
        }

        public Optional<Exams> cancelledStateExams (Long id){
            Optional<Exams> examsFromDb = examsRepository.findById(id);
            if (examsFromDb.isPresent()){
                Exams examsCancelled = examsFromDb.get();
                examsCancelled.setStatus(ExamsPatientStatusEnum.CANCELADO);
                examsRepository.save(examsCancelled);
            }
            return examsFromDb;
        }

        public List<Exams> findAll(){
            return examsRepository.findAll();
        }

        public Optional<Exams> findById(Long id){
            return examsRepository.findById(id);
        }

        public List<Exams> findByConsultationId(Long id){
            return  examsRepository.findByConsultationId(id);
        }

}

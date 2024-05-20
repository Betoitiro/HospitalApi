package itiroBeto.com.github.APIHospital.model;

import itiroBeto.com.github.APIHospital.enums.ExamsPatientStatusEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Exams implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String typeOfExams;
    private String description;

    private String result;

    private String DateTime;

    @Enumerated(EnumType.STRING)
    private ExamsPatientStatusEnum status;


    @ManyToOne
    @JoinColumn(name = "consultation_id")
    Consultation consultation;



    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getTypeOfExams() {
        return typeOfExams;
    }

    public void setTypeOfExams(String typeOfExams) {
        this.typeOfExams = typeOfExams;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getDateTime() {
        return DateTime;
    }

    public void setDateTime(String dateTime) {
        DateTime = dateTime;
    }

    public ExamsPatientStatusEnum getStatus() {
        return status;
    }

    public void setStatus(ExamsPatientStatusEnum status) {
        this.status = status;
    }

    public Consultation getConsultation() {
        return consultation;
    }

    public void setConsultation(Consultation consultation) {
        this.consultation = consultation;
    }
}

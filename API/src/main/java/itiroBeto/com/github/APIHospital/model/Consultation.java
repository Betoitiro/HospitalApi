package itiroBeto.com.github.APIHospital.model;

import itiroBeto.com.github.APIHospital.enums.ConsultationPatientStatusEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Consultation implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String appointmentDateTime;
    private String Description;

    @Enumerated(EnumType.STRING)
    private ConsultationPatientStatusEnum status;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    Doctor doctor;


    @ManyToOne
    @JoinColumn(name = "patient_id")
    Patient patient;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAppointmentDateTime() {
        return appointmentDateTime;
    }

    public void setAppointmentDateTime(String appointmentDateTime) {
        this.appointmentDateTime = appointmentDateTime;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public ConsultationPatientStatusEnum getStatus() {
        return status;
    }

    public void setStatus(ConsultationPatientStatusEnum status) {
        this.status = status;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }
}

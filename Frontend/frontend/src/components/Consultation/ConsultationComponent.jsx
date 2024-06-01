@RestController
@RequestMapping("/consultation")
@Tag(name = "Consultas", description = "Endpoint referente as consultas dos pacientes")
public class ConsultationControlller {
    @Autowired
    ConsultationService consultationService;

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void create(@RequestBody Consultation consultation){
        consultationService.create(consultation);
    }
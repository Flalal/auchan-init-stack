package init.stack.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import init.stack.api.services.IEmployeService;
import init.stack.api.models.Employe;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api")
public class EmployeController {
	
	@Autowired
	private IEmployeService employeService;
	
	@PostMapping
	public ResponseEntity<?> saveUser(@RequestBody Employe employe)
	{
		employeService.saveEmploye(employe);
		return ResponseEntity.ok(true);
	}
	
	@GetMapping("/employes")
	public ResponseEntity<?> findAllEmployes()
	{
		return ResponseEntity.ok(employeService.findAll());
	}
	
	@GetMapping("/employes/{id}")
	public ResponseEntity<?> findAllEmployes(@PathVariable String id)
	{
		return ResponseEntity.ok(employeService.findById(id));
	}
	
	@DeleteMapping("/employes/{id}")
	public void deleteEmp(@PathVariable String id) {
		employeService.deleteEmploye(id);
	}
	
	
}

package init.stack.api.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import init.stack.api.models.Employe;
import init.stack.api.repositories.IEmployeRepository;
import init.stack.api.services.IEmployeService;

@Service
public class EmployeServiceImpl implements IEmployeService {

	@Autowired
    IEmployeRepository employeRepository;

    @Override
    public void saveEmploye(Employe employe){
        employeRepository.save(employe);
    }
    
    @Override
    public List<Employe> findAll(){
    	
    	List<Employe> employes = employeRepository.findAllEmployes();
    	return employes;
    	
    }

	@Override
	public Employe findById(String id) {
		
		Employe employe = employeRepository.findEmpById(id);
		
		return employe;
	}

	@Override
	public void deleteEmploye(String id) {
		
		Employe employe = employeRepository.findEmpById(id);
		
		employeRepository.delete(employe);
	}
}
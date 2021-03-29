package init.stack.api.services;

import java.util.List;

import init.stack.api.models.Employe;

public interface IEmployeService {

	void saveEmploye(Employe employe);
	
	List<Employe> findAll();
	
	Employe findById(String id);
	
	void deleteEmploye(String id);
	
}

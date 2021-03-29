package init.stack.api.repositories;

import init.stack.api.models.Employe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IEmployeRepository extends MongoRepository<Employe, String> {

   @Query(value ="{}", fields="{}")
    public List<Employe> findAllEmployes();
   
   
   @Query(value ="{ id : ?0}", fields="{}")
   public Employe findEmpById(String id);
}

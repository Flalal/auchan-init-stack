package init.stack.api.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "employes")
public class Employe {
	

	@Id
	private String id;

	
	private String firstName;

	
	private String lastName;
	
	private String email;

}
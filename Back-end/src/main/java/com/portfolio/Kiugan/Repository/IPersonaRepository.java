
package com.portfolio.Kiugan.Repository;

import com.portfolio.Kiugan.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona, Long>{ //ctrl + click => metodos de JpaRepository
    
}

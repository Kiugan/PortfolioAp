package com.portfolio.Kiugan.Interface;

//En este lugar se detallan los metodos que se van a utilizar

import com.portfolio.Kiugan.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Traer una lista de personas
    public List<Persona> getPersona();
    
    //Guardar un objeto de tipo Persona
    public void savePersona(Persona persona);
    
    //Eliminar un objeto (usuario), pero lo buscamos por Id
    public void deletedPersona(Long id);
    
    //Buscar una persona por id
    public Persona findPersona(Long id);
}

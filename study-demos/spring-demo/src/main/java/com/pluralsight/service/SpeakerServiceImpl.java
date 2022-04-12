package com.pluralsight.service;

import com.pluralsight.model.Speaker;
import com.pluralsight.repository.HibernateSpeakerRepositoryImpel;
import com.pluralsight.repository.SpeakerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;

@Service(value="speakerService")
@Scope(value= BeanDefinition.SCOPE_SINGLETON)
public class SpeakerServiceImpl implements SpeakerService {

    //private SpeakerRepository repository = new HibernateSpeakerRepositoryImpel();
    @Autowired
    private SpeakerRepository repository;

   // @Autowired
    public SpeakerServiceImpl(SpeakerRepository repository) {
        System.out.println("constructor-repository");
        this.repository = repository;
    }

    public SpeakerServiceImpl( ) {
        System.out.println("constructor-no-arg");
    }
    @PostConstruct
    private void initialize(){
        System.out.println("PostConstruct");
    }

    public List<Speaker> findAll(){
       return repository.findAll();
    }


//    public void setRepository(SpeakerRepository repository) {
//        System.out.println("setRepository");
//        this.repository = repository;
//    }
}

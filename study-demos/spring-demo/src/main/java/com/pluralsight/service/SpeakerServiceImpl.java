package com.pluralsight.service;

import com.pluralsight.model.Speaker;
import com.pluralsight.repository.HibernateSpeakerRepositoryImpel;
import com.pluralsight.repository.SpeakerRepository;

import java.util.List;

public class SpeakerServiceImpl implements SpeakerService {

    //private SpeakerRepository repository = new HibernateSpeakerRepositoryImpel();
    private SpeakerRepository repository;

    public SpeakerServiceImpl(SpeakerRepository repository) {
        this.repository = repository;
    }

    public List<Speaker> findAll(){
       return repository.findAll();
    }

//    public void setRepository(SpeakerRepository repository) {
//        this.repository = repository;
//    }
}

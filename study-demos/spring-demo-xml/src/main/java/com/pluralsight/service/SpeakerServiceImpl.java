package com.pluralsight.service;

import com.pluralsight.model.Speaker;

import com.pluralsight.repository.SpeakerRepository;

import java.util.List;

public class SpeakerServiceImpl implements SpeakerService {

    private SpeakerRepository repository;

    public List<Speaker> findAll(){
       return repository.findAll();
    }

    public SpeakerServiceImpl(SpeakerRepository repository) {
        System.out.println("constructor-all-args");
        this.repository = repository;
    }

    public SpeakerServiceImpl() {
    }

    public void setSpeakerRepository (SpeakerRepository repository) {
        // <property name="speakerRepository" ref="speakerRepository"></property>
        //if ( name = "speakerRepository" ) this function Name should be "setSpeakerRepository"
        //if(name = "repository") this function Name should be "setRepository"
        System.out.println("setRepository");
        this.repository = repository;
    }
}

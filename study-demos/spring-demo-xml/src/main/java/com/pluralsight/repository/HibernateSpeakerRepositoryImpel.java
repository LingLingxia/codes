package com.pluralsight.repository;

import com.pluralsight.model.Speaker;

import java.util.ArrayList;
import java.util.List;

public class HibernateSpeakerRepositoryImpel implements SpeakerRepository {

    public List<Speaker> findAll(){
        List<Speaker> speakers = new ArrayList<Speaker>();
        Speaker speaker = new Speaker();
        speaker.setFirstName("li");
        speaker.setLastName("ling xia");
        speakers.add(speaker);
        return speakers;
    }
}

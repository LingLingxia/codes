package com.pluralsight.repository;

import com.pluralsight.model.Speaker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
@Repository
@Profile("dev")
public class HibernateSpeakerRepositoryImpel implements SpeakerRepository {
      @Autowired
      private Calendar cal;
    public List<Speaker> findAll(){
        List<Speaker> speakers = new ArrayList<Speaker>();
        Speaker speaker = new Speaker();
        speaker.setFirstName("li");
        speaker.setLastName("ling xia");
        System.out.println("cal:" + cal.getTime());
        speakers.add(speaker);
        return speakers;
    }
}

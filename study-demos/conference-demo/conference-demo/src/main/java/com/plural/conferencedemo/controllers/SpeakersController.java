package com.plural.conferencedemo.controllers;

import com.plural.conferencedemo.models.Speaker;
import com.plural.conferencedemo.repositories.SpeakerRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/speakers")
public class SpeakersController {
    @Autowired
    private SpeakerRepository speakerRepository;

    @GetMapping
    public List<Speaker> list(){//这个名字不重要
        return speakerRepository.findAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Speaker get(
            @PathVariable
            Long id
    ){
        return speakerRepository.getById(id);
    }

    @PostMapping
    public Speaker create(
            @RequestBody
            Speaker speaker

    ){
        return  speakerRepository.saveAndFlush(speaker);
    }

    @RequestMapping(value = "{id}",method = RequestMethod.DELETE)
    public void delete(
            @PathVariable
            Long id
    ){

    }

    @RequestMapping(value = "{id}",method = RequestMethod.PUT)
    public Speaker update(
            @PathVariable
            Long id,
            @RequestBody
            Speaker speaker
    ){
        Speaker exitingSpeaker = speakerRepository.getById(id);
        BeanUtils.copyProperties(speaker,exitingSpeaker,"speaker_id");
        return  speakerRepository.saveAndFlush(exitingSpeaker);
    }
}

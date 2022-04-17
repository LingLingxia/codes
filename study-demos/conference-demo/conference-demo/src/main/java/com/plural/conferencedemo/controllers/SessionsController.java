package com.plural.conferencedemo.controllers;

import com.plural.conferencedemo.models.Session;
import com.plural.conferencedemo.models.Speaker;
import com.plural.conferencedemo.repositories.SessionRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/sessions")
public class SessionsController {
    @Autowired
    private SessionRepository sessionRepository;

    @GetMapping
    public List<Session> list(){
        return sessionRepository.findAll();//这是默认就有，都不用写
    }

    @GetMapping
    @RequestMapping("{id}")
    public Session get(@PathVariable Long id){
        return sessionRepository.getById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Session create(@RequestBody  Session session){
        return sessionRepository.saveAndFlush(session);
    }

    @RequestMapping(value = "{id}",method = RequestMethod.DELETE)
    public void delete(
            @PathVariable
                    Long id
    ){
        sessionRepository.deleteById(id);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Session update(
            @PathVariable
            Long id,
            @RequestBody
            Session session
    ){
        Session existingSession = sessionRepository.getById(id);
        BeanUtils.copyProperties(session,existingSession,"session_id");
        return sessionRepository.saveAndFlush(existingSession);
    }

}

package com.plural.conferencedemo.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RequestMapping("/")
@RestController   //should be @ResetController not @Controller
public class HomeController {
    @Value("${app.version}")
    private String v;

    @GetMapping
    public Map<String,String> getVersion(){
        Map<String,String> map = new HashMap<>();
        map.put("version",v);
        return map;
    }
}

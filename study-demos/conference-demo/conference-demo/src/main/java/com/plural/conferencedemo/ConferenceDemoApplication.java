package com.plural.conferencedemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ConferenceDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConferenceDemoApplication.class, args);
	}
	//when set -Dsrping.profiles.active=dev ,if no application-dev.yml ,will use application.yml
	// if no application-dev.properties,  will use  application.properties

}

package com.restless.esganalysis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class EsgAnalysisApplication {

	public static void main(String[] args) {
		SpringApplication.run(EsgAnalysisApplication.class, args);
	}

}

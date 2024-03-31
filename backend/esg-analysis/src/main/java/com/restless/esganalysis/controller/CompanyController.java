package com.restless.esganalysis.controller;

import java.net.http.HttpResponse;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.restless.esganalysis.models.Company;
import com.restless.esganalysis.models.enums.Continent;
import com.restless.esganalysis.models.enums.Industry;
import com.restless.esganalysis.models.enums.Size;
import com.restless.esganalysis.models.records.CompanyRecord;
import com.restless.esganalysis.service.interfaces.ICompanyService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/companies")
@AllArgsConstructor
public class CompanyController {
    
    private final ICompanyService service;
    
    @GetMapping
    public ResponseEntity<List<Company>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(service.findAll());
    }

    @GetMapping("/filter")
    public ResponseEntity<List<Company>> getByFilters(
            @RequestParam(required = false) Continent continent,
            @RequestParam(required = false) Size size,
            @RequestParam(required = false) Industry industry,
            @RequestParam(required = false) String name
    ) {
        if (continent == null && size == null && industry == null && name == null) {
            return ResponseEntity.status(HttpStatus.OK).body(service.findAll());
        }

        List<Company> companies = service.findByFilters(continent, size, industry, name);
        return ResponseEntity.ok(companies);
    }

    @PostMapping
    public ResponseEntity<Company> create(
        @RequestBody CompanyRecord companyRecord
    ) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.create(companyRecord));
    }
}

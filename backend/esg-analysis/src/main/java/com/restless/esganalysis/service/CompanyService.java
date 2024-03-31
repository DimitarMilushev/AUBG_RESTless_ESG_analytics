package com.restless.esganalysis.service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.restless.esganalysis.models.Company;
import com.restless.esganalysis.models.Report;
import com.restless.esganalysis.models.enums.Continent;
import com.restless.esganalysis.models.enums.Industry;
import com.restless.esganalysis.models.enums.Size;
import com.restless.esganalysis.models.records.CompanyRecord;
import com.restless.esganalysis.repositories.ICompanyRepository;
import com.restless.esganalysis.service.interfaces.ICompanyService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CompanyService implements ICompanyService {

    private final ICompanyRepository repository;

    @Override
    public List<Company> findAll() {
        // List<Company> companies = new ArrayList<>();
        // List<Report> reports = new ArrayList<>();
        // Report report1 = new Report("url1", Date.from(Instant.now()));
        // reports.add(report1);
        // report1.initialize();
        // Company company = new Company("mite OOD", Continent.EU, Industry.AEROSPACE, Size.LARGE, reports);
        // companies.add(company);
        // company.initialize();
        return repository.findAll();
    }

    @Override
    public List<Company> findByFilters(Continent continent, Size size, Industry industry, String name) {
        System.out.println(continent);
        System.out.println(size);
        System.out.println(industry);
        System.out.println(name);
        return repository.findByContinentAndSizeAndIndustryAndNameContainingIgnoreCase(continent, size, industry, name);
    }

    @Override
    public Company create(CompanyRecord companyRecord) {
        Company company = new Company(companyRecord.name(), companyRecord.continent(),
         companyRecord.industry(), companyRecord.size(), companyRecord.reports());
        company.initialize();
        company.getReports().forEach(Report::initialize);
        return repository.save(company);
    }

}

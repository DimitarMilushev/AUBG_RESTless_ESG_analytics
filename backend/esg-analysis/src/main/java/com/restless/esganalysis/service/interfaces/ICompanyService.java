package com.restless.esganalysis.service.interfaces;

import java.util.List;

import com.restless.esganalysis.models.Company;
import com.restless.esganalysis.models.enums.Continent;
import com.restless.esganalysis.models.enums.Industry;
import com.restless.esganalysis.models.enums.Size;
import com.restless.esganalysis.models.records.CompanyRecord;

public interface ICompanyService {
    public List<Company> findAll();

    public List<Company> findByFilters(Continent continent, Size size, Industry industry, String name);

    public Company create(CompanyRecord companyRecord);

}

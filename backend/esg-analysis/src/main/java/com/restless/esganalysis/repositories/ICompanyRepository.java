package com.restless.esganalysis.repositories;

import java.util.UUID;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.restless.esganalysis.models.Company;
import com.restless.esganalysis.models.enums.Continent;
import com.restless.esganalysis.models.enums.Industry;
import com.restless.esganalysis.models.enums.Size;

import java.util.List;


@Repository
public interface ICompanyRepository extends MongoRepository<Company, UUID> {
    public List<Company> findByContinent(Continent continent);

    List<Company> findByContinentAndSizeAndIndustryAndNameContainingIgnoreCase(
        Continent continent, Size size, Industry industry, String name);
}

package com.restless.esganalysis.models.records;

import java.util.List;

import com.restless.esganalysis.models.Report;
import com.restless.esganalysis.models.enums.Continent;
import com.restless.esganalysis.models.enums.Industry;
import com.restless.esganalysis.models.enums.Size;

public record CompanyRecord(
    String name,
    Continent continent,
    Industry industry,
    Size size,
    List<Report> reports 
) {}

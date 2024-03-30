package com.restless.esganalysis.models;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

import com.restless.esganalysis.models.enums.Continent;
import com.restless.esganalysis.models.enums.Industry;
import com.restless.esganalysis.models.enums.Size;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Document
@EqualsAndHashCode(callSuper = true)
public class Company extends BaseEntity {
    String name;
    Continent continent;
    Industry industry;
    Size size;
    List<Report> reports;
}

package com.restless.esganalysis.models;


import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Report extends BaseEntity {
    String pdfUrl;
    Date dateOfCreation;
}

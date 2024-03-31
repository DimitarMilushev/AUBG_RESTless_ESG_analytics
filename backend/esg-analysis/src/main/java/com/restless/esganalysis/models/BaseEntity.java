package com.restless.esganalysis.models;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
public class BaseEntity {
    @Id
    UUID id;
    @CreatedDate
    @Field(name = "createdDate")
    public LocalDateTime createdDateTime;

    @LastModifiedDate
    @Field(name = "lastUpdate")
    public LocalDateTime lastUpdateDateTime;

    public void initialize() {
        this.id = UUID.randomUUID();
        this.createdDateTime = LocalDateTime.now();
        this.lastUpdateDateTime = LocalDateTime.now();
    }
}

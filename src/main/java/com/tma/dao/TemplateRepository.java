package com.tma.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tma.model.Template;

public interface TemplateRepository extends MongoRepository<Template, String>{


}
package com.tma.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.tma.dao.TemplateRepository;
import com.tma.model.Template;

public class TemplateService implements ITemplateService {
	private TemplateRepository templateRepository;

	@Autowired
	public TemplateService(TemplateRepository templateRepository) {
		this.templateRepository = templateRepository;
	}

	@Override
	public List<Template> getAll() {
		return templateRepository.findAll();
		// return mongoTemplate.findAll(User.class);
	}

	@Override
	public Template getWithId(String id) {
		return templateRepository.findOne(id);
	}

}

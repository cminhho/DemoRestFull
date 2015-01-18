package com.tma.service;

import java.util.List;

import com.tma.model.Template;

public interface ITemplateService {
	public List<Template> getAll();
	public Template getWithId(String id);
}



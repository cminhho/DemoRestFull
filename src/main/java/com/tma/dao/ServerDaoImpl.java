package com.tma.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

import com.tma.model.Server;
import com.tma.model.Template;

public class ServerDaoImpl implements ServerDao{

	@Autowired
	private MongoTemplate m_mongoTemplate;
	
	@Override
	public List<Server> getAllServers() {
		return m_mongoTemplate.findAll(Server.class);
	}
	
	@Override
	public List<Template> getAllTemaplte() {
		// TODO Auto-generated method stub
		return m_mongoTemplate.findAll(Template.class);
	}
	
}

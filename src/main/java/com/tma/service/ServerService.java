package com.tma.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.tma.dao.ServerRepository;
import com.tma.dao.TemplateRepository;
import com.tma.model.Server;
import com.tma.model.Template;

public class ServerService implements IServerSevice {

	private ServerRepository serverRepository;

	@Autowired
	public ServerService(ServerRepository serverRepository) {
		this.serverRepository = serverRepository;
	}

	@Override
	public List<Server> getAll() {
		return serverRepository.findAll();
		// return mongoTemplate.findAll(User.class);
	}

	@Override
	public List<Server> getWithUser(String tenant) {
		return serverRepository.findByName(tenant);
	}

	@Override
	public Server getWithId(String id) {
		return serverRepository.findOne(id);
	}

	@Override
	public void addServer(Server server) {
		// TODO Auto-generated method stub
		serverRepository.save(server);

	}

	@Override
	public void update(String id, Server server) {
		// TODO Auto-generated method stub
		if (serverRepository.findOne(id) != null) {
			serverRepository.save(server);
		}

	}

	@Override
	public void delete(String id) {
		// TODO Auto-generated method stub
		serverRepository.delete(id);
	}

}

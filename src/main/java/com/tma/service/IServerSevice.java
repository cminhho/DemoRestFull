package com.tma.service;

import java.util.List;

import com.tma.model.Server;
import com.tma.model.User;

public interface IServerSevice {
	public List<Server> getAll();
	public List<Server> getWithUser(String user);
	public Server getWithId(String id);
	public void addServer(Server server);
	public void update(String id,Server server);
	public void delete(String id);
}

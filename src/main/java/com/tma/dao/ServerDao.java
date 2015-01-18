package com.tma.dao;

import com.tma.model.Server;
import com.tma.model.Template;

import java.util.List;

public interface ServerDao {

	List<Server> getAllServers();
	List<Template> getAllTemaplte();
}

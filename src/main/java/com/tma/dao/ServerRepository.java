package com.tma.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.tma.model.Server;

public interface ServerRepository extends MongoRepository<Server, String> {
	@Query(value = "{ 'tenant' : ?0 }")
	public List<Server> findByName(String tenant);
}

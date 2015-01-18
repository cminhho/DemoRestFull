package com.tma.controller;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tma.model.Server;
import com.tma.service.ServerService;

@Controller
@RequestMapping(value="/server", produces="application/json")
public class ServerController {
	
	ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
	ServerService serverService = (ServerService) context.getBean("serverService");
	
	@RequestMapping(method=RequestMethod.GET, value="/all", produces="application/json")
	@ResponseBody public List<Server> getAll(){
		return  serverService.getAll();
	}
	
	@RequestMapping(method=RequestMethod.GET, produces="application/json")
	@ResponseBody public List<Server> getWithTenant(@RequestParam(value="tenant") String tenant){
		return  serverService.getWithUser(tenant);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/{id}",produces="application/json")
	@ResponseBody public Server getWithId(@PathVariable String id){
		return serverService.getWithId(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, produces="application/json")
	@ResponseBody public void addServer(@RequestBody Server server){
		serverService.addServer(server);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/{id}", produces="application/json")
	@ResponseBody public void delete(@PathVariable String id){
		serverService.delete(id);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/{id}",  produces="application/json")
	@ResponseBody public void update(@PathVariable String id, @RequestBody Server server){
		serverService.update(id, server);
	}
	
//		@Autowired
//		private ServerDao m_serverDao;
//		
//		@RequestMapping(method=RequestMethod.GET, value="/all", produces="application/json")
//		@ResponseBody public List<Server> getAll(){
//			return m_serverDao.getAllServers();
//		}
//		
//		@RequestMapping(method=RequestMethod.GET, produces="application/json")
//		@ResponseBody public List<Server> getWithTenant(@RequestParam(value="tenant") String tenant){
//			return  java.util.Collections.emptyList(); //serverService.getWithUser(tenant);
//		}
//		
//		@RequestMapping(method=RequestMethod.GET, value="/{id}",produces="application/json")
//		@ResponseBody public Server getWithId(@PathVariable String id){
//			return null; //serverService.getWithId(id);
//		}
//		
//		@RequestMapping(method=RequestMethod.POST, produces="application/json")
//		@ResponseBody public void addServer(@RequestBody Server server){
////			serverService.addServer(server);
//		}
//		
//		@RequestMapping(method=RequestMethod.DELETE, value="/{id}", produces="application/json")
//		@ResponseBody public void delete(@PathVariable String id){
////			serverService.delete(id);
//		}
//		
//		@RequestMapping(method=RequestMethod.PUT, value="/{id}",  produces="application/json")
//		@ResponseBody public void update(@PathVariable String id, @RequestBody Server server){
////			serverService.update(id, server);
//		}
}

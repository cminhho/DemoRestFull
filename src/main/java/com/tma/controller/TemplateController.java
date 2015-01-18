package com.tma.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tma.dao.ServerDao;
import com.tma.model.Server;
import com.tma.model.Template;
import com.tma.service.TemplateService;

@Controller
@RequestMapping(value="/template", produces="application/json")
public class TemplateController {
	
//	
//	@Autowired
//	private ServerDao m_serverDao;
//	
//	@RequestMapping(method=RequestMethod.GET, value="/all", produces="application/json")
//	@ResponseBody public List<Server> getAll(){
//		return m_serverDao.getAllServers();
//	}
//	
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		TemplateService templateService = (TemplateService) context.getBean("templateService");
		
		@RequestMapping(method=RequestMethod.GET, value="/all", produces="application/json")
		@ResponseBody public List<Template> getAll(){
			return templateService.getAll();
		}
		@RequestMapping(method=RequestMethod.GET, value="/{id}",produces="application/json")
		@ResponseBody public Template getWithId(@PathVariable String id){
			return templateService.getWithId(id);
		}
		
		
}

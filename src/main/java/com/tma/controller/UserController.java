package com.tma.controller;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tma.model.User;
import com.tma.service.UserService;

@Controller
@RequestMapping(value="/user", produces="application/json")
public class UserController {
	
	
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		UserService userService = (UserService) context.getBean("userService");
		
		@RequestMapping(method=RequestMethod.GET, value="/all", produces="application/json")
		@ResponseBody public List<User> getAll(){
			return userService.getAll();
		}
		@RequestMapping(method=RequestMethod.GET, value="/{id}",produces="application/json")
		@ResponseBody public User getWithId(@PathVariable String id){
			return userService.getWithId(id);
		}
		
		@RequestMapping(method=RequestMethod.POST, produces="application/json")
		@ResponseBody public void addUser(@RequestBody User user){
			System.out.println("add User" + user);
			userService.addUser(user);
		}
		
		@RequestMapping(method=RequestMethod.DELETE, value="/{id}", produces="application/json")
		@ResponseBody public void delete(@PathVariable String id){
			userService.delete(id);
		}
		
		@RequestMapping(method=RequestMethod.PUT, value="/{id}",  produces="application/json")
		@ResponseBody public void update(@PathVariable String id, @RequestBody User user){
			userService.update(id, user);
		}
}

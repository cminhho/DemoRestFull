package com.tma;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.tma.service.ServerService;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		ServerService serverService = (ServerService) context.getBean("serverService");
		System.out.println(serverService.getWithUser("admin"));
    }
}

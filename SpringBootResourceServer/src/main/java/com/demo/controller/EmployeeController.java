package com.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.demo.model.Employee;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

	@RequestMapping(value = "/user/getEmployeesList",produces = "application/json")
	@ResponseBody
	public List<Employee> getEmployeeList(){
		List<Employee> list = new ArrayList<Employee>();
		Employee employee = new Employee();
		employee.setId(1);
		employee.setName("sai");
		list.add(employee);
		return list;
	}
	
//	@GetMapping("/oauth/authorize")
//	public ModelAndView getSet() {
//		//System.out.println("Hello");
//		return new ModelAndView("some");
//	}
}

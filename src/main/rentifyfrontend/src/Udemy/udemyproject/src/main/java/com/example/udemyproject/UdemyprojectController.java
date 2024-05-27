package com.example.udemyproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
@CrossOrigin
@Controller
public class UdemyprojectController {
    @Autowired
    private LoginService loginService;
    @GetMapping("/")    
    public String forward() {
        return "index";
    }
    @PostMapping("/Login")
    public  ResponseEntity<?> Udemyproject(@RequestBody LoginData loginData ) {
        //TODO: process POST request
        System.out.println(loginData);
        String t=loginService.Login(loginData);
        return ResponseEntity.ok(t);
    }
    @PostMapping("/Signup")
    public  ResponseEntity<?> Signup(@RequestBody SignupData signupData) 
    {
        //TODO: process POST request
        System.out.println(signupData);
        String t=loginService.add(signupData);
        return ResponseEntity.ok(t);
    }
    
}

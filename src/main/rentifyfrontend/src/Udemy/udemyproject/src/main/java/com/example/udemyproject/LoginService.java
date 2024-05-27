package com.example.udemyproject;

import org.springframework.stereotype.Service;

@Service
public interface LoginService {

    String Login(LoginData loginData);
    String add(SignupData signupData);
}

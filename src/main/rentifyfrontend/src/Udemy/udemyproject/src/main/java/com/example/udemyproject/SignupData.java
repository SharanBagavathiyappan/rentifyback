package com.example.udemyproject;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class SignupData {
     @Id()
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long userid;
    public String username;
    public String email;
    public int password;


    public SignupData(){

        
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public int getPassword() {
        return password;
    }
    public void setPassword(int password) {
        this.password = password;
    }
}

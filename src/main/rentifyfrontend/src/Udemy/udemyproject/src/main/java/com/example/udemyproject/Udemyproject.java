package com.example.udemyproject;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Udemyproject {
    @Id()
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long userid;
    public String username;
    public String getUsername() {
        return username;
    }
    public Udemyproject() {
    }
    public Long getUserid() {
        return userid;
    }
    public Udemyproject(Long userid, String username, int password) {
        this.userid = userid;
        this.username = username;
        this.password = password;
    }
    public Udemyproject(String username,int password){
        this.username=username;
        this.password=password;
    }
    public void setUserid(Long userid) {
        this.userid = userid;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public int getPassword() {
        return password;
    }
    public void setPassword(int password) {
        this.password = password;
    }
    int password;
   

    
}

package com.rentifyback.rentifyback;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Register {
@Id()
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long userid;
    public String firstname;
    public String lastname;
    public long phone;
    public Long getUserid() {
        return userid;
    }
    public void setUserid(Long userid) {
        this.userid = userid;
    }
    public String getFirstname() {
        return firstname;
    }
    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }
    public String getLastname() {
        return lastname;
    }
    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
    public long getPhone() {
        return phone;
    }
    public void setPhone(long phone) {
        this.phone = phone;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getUsertype() {
        return usertype;
    }
    public void setUsertype(String usertype) {
        this.usertype = usertype;
    }
    public String email;
    public String username;
    public String password;
    public String usertype;
    public Register(Long userid, String firstname, String lastname, long phone, String email, String username,
            String password, String usertype) {
        this.userid = userid;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.username = username;
        this.password = password;
        this.usertype = usertype;
    }
    
}

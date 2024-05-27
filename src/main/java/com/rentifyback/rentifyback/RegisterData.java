package com.rentifyback.rentifyback;

public class RegisterData {

    public Long userid;
    public String firstname;
    public Long getUserid() {
        return userid;
    }
    public RegisterData(Long userid, String firstname, String lastname, long phone, String email, String username,
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
    public void setUserid(Long userid) {
        this.userid = userid;
    }
    public String lastname;
    public long phone;
    public String email;
    public String username;
    public String password;
    public String usertype;
    
    public RegisterData() {
    }
    public RegisterData(String firstname, String lastname, long phone, String email, String username, String password,
            String usertype) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.username = username;
        this.password = password;
        this.usertype = usertype;
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
    
}

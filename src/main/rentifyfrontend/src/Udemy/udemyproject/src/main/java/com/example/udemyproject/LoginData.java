package com.example.udemyproject;

public class LoginData {
    public String username;
    public int password;
    public String getUsername() {
        return username;
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
    public LoginData(String username, int password) {
        this.username = username;
        this.password = password;
    }

}

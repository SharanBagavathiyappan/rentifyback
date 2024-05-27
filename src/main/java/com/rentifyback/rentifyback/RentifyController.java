package com.rentifyback.rentifyback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin
@Controller
public class RentifyController {
    @Autowired
    private RentifyService rentifyService;
    
    @GetMapping("/")    
    public String forward() {
        return "index";
    }

    @PostMapping("/Signup")
    public ResponseEntity<?> signup(@RequestBody RegisterData registerData){
        String t=rentifyService.sign(registerData);
        return ResponseEntity.ok(t);
    }

}

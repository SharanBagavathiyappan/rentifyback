package com.rentifyback.rentifyback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RentifyServiceImpl implements RentifyService {

    @Autowired
    private RentifyRepository rentifyRepository;

    @Override
    public String sign(RegisterData registerData)
    {

        Register register=new Register(
            registerData.getUserid(),
            registerData.getFirstname(),
            registerData.getLastname(),
            registerData.getPhone(),
            registerData.getEmail(),
            registerData.getUsername(),
            registerData.getPassword(),
            registerData.getUsertype());
            rentifyRepository.save(register);
       return "Success";

    }
}

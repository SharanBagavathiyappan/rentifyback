package com.example.udemyproject;

// import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService{
    @SuppressWarnings("unused")

    @Autowired
    private LoginRepository loginRepository;

    @Override
    public String Login(LoginData loginData){
        System.out.println(loginData.getUsername());
        System.out.println(loginData.getPassword());
      Udemyproject logp=loginRepository.findByUsername(loginData.getUsername());
       if(logp==null)
       {
         return "Wrong Username";
       }
       else{
       System.out.println("Data");
       System.out.println(logp);
    //  System.out.println(lp.getUsername());
    //  System.out.println(loginData.getPassword());
    //  System.out.println(lp.getPassword());
       int password=loginData.getPassword();
    //    System.out.println(password);
       int password1=logp.getPassword();
    //    System.out.println(password1);
       if(password==password1)
        {
       
            return "OK";
            
        }
        else
        return "NOTOK";
    }
}

@Override
public String add(SignupData signupData)
{

   Object rec;
   <rec> rec=loginRepository.save(signupData);
   return signupData.getUsername();
}
}

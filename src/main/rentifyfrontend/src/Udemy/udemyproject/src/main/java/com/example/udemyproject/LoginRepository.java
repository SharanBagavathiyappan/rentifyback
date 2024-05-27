package com.example.udemyproject;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface LoginRepository extends JpaRepository<SignupData,Long> {
    SignupData findByUsername(String username);
     <S>S save(SignupData signupData);
}

package com.rentifyback.rentifyback;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface RentifyRepository extends JpaRepository<Register,Long>{

   

}

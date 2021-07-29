package com.srm.loan.Repository;

import com.srm.loan.Model.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepo extends JpaRepository<Register,Long> {
    
    @Query("select r from Register r where r.mail=:mail ")
    public Register fetchMailAndPass(String mail);


}

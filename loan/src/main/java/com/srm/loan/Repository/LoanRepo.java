package com.srm.loan.Repository;

import com.srm.loan.Model.LoanData;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface  LoanRepo extends JpaRepository<LoanData,Integer>{
    
}

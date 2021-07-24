package com.srm.loan.Repository;
import com.srm.loan.Model.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepo extends JpaRepository<Register,Long>{
    
}

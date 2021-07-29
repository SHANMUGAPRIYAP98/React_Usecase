package com.srm.loan.IDGeneration;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

public class CustomId implements IdentifierGenerator{
    private String first_part="FGLC/";
    private String second_part="KO/";
    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object arg1) throws HibernateException {
       try{
           Connection conn=session.connection();
           PreparedStatement ps=conn.prepareStatement("select count(rid) from register");
           ResultSet rs=ps.executeQuery();
           while(rs.next())
           {
               int rid=rs.getInt(1)+101;
               String gid=first_part+second_part+rid;
               return gid;
           }
       }
       catch(Exception e)
       {
           System.out.println(e);
       }
       return null;
    }
    
}

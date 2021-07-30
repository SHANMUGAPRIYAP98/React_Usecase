package com.srm.loan.Model;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;


import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "common_details")
public class GeneralData {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String branch;
    @NotNull(message = "name is required")
    private String cname;
    private String city;
    private String state;
    private Integer zipcode;
    @Temporal(TemporalType.DATE)
    @JsonFormat(pattern ="yyyy-MM-DD")
    private Date dob;
    private String gender;
    private Long phone;
    private Long landline;
    private String religion;
    private String community;
    private String nationality;
    private String education;
    private String occupation;
    @Email(message = "enter a valid mail")
    private String mail;
    public String getBranch() {
        return branch;
    }
    public void setBranch(String branch) {
        this.branch = branch;
    }
    public String getCname() {
        return cname;
    }
    public void setCname(String cname) {
        this.cname = cname;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public Integer getZipcode() {
        return zipcode;
    }
    public void setZipcode(Integer zipcode) {
        this.zipcode = zipcode;
    }
    public Date getDob() {
        return dob;
    }
    public void setDob(Date dob) {
        this.dob = dob;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public Long getPhone() {
        return phone;
    }
    public void setPhone(Long phone) {
        this.phone = phone;
    }
    public Long getLandline() {
        return landline;
    }
    public void setLandline(Long landline) {
        this.landline = landline;
    }
    public String getReligion() {
        return religion;
    }
    public void setReligion(String religion) {
        this.religion = religion;
    }
    public String getCommunity() {
        return community;
    }
    public void setCommunity(String community) {
        this.community = community;
    }
    public String getNationality() {
        return nationality;
    }
    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
    public String getEducation() {
        return education;
    }
    public void setEducation(String education) {
        this.education = education;
    }
    public String getOccupation() {
        return occupation;
    }
    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }
    public String getMail() {
        return mail;
    }
    public void setMail(String mail) {
        this.mail = mail;
    }
    @Override
    public String toString() {
        return "GeneralData [branch=" + branch + ", city=" + city + ", cname=" + cname + ", community=" + community
                + ", dob=" + dob + ", education=" + education + ", gender=" + gender + ", id=" + id + ", landline="
                + landline + ", mail=" + mail + ", nationality=" + nationality + ", occupation=" + occupation
                + ", phone=" + phone + ", religion=" + religion + ", state=" + state + ", zipcode=" + zipcode + "]";
    }
 

}

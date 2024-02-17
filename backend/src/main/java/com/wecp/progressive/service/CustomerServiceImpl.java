package com.wecp.progressive.service;


import com.wecp.progressive.dao.CustomerDAO;
import com.wecp.progressive.dao.CustomerDAOImpl;
import com.wecp.progressive.entity.Customers;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

<<<<<<< HEAD
public class CustomerServiceImpl implements CustomerService {

    CustomerDAO customerDAO;
=======
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

public class CustomerServiceImpl implements CustomerService {

     @Autowired
     CustomerDAO customerDAO;
    
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    private static List<Customers> customersList = new ArrayList<>();

    public CustomerServiceImpl(CustomerDAO customerDAO) {
        this.customerDAO = customerDAO;
    }

    @Override
    public List<Customers> getAllCustomers() throws SQLException {
        return customerDAO.getAllCustomers();
<<<<<<< HEAD
=======
        //return null;
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    }

    @Override
    public Customers getCustomerById(int customerId) throws SQLException {
<<<<<<< HEAD
        return customerDAO.getCustomerById(customerId);
=======
       return customerDAO.getCustomerById(customerId);
       //return null;
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    }

    @Override
    public int addCustomer(Customers customers) throws SQLException {
        return customerDAO.addCustomer(customers);
<<<<<<< HEAD
=======
        
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    }

    @Override
    public void updateCustomer(Customers customers) throws SQLException {
        customerDAO.updateCustomer(customers);
<<<<<<< HEAD
=======
        
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    }

    @Override
    public void deleteCustomer(int customerId) throws SQLException {
        customerDAO.deleteCustomer(customerId);
<<<<<<< HEAD
=======
        //return null;
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    }

    @Override
    public List<Customers> getAllCustomersSortedByName() throws SQLException {
        List<Customers> sortedCustomers = customerDAO.getAllCustomers();
        if (sortedCustomers != null) {
            Collections.sort(sortedCustomers);
        }
        return sortedCustomers;
    }

    @Override
    public List<Customers> getAllCustomersFromArrayList() {
        return customersList;
    }

    @Override
    public List<Customers> addCustomersToArrayList(Customers customers) {
        customersList.add(customers);
        return customersList;
    }

    @Override
    public List<Customers> getAllCustomersSortedByNameFromArrayList(){
        List<Customers> sortedCustomers = customersList;
        Collections.sort(sortedCustomers);
        return sortedCustomers;
    }

    @Override
    public void emptyArrayList() {
        customersList = new ArrayList<>();
    }
}
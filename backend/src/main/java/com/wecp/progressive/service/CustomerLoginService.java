package com.wecp.progressive.service;

import com.wecp.progressive.entity.Customers;
import com.wecp.progressive.exception.CustomerAlreadyExistsException;
import com.wecp.progressive.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerLoginService implements UserDetailsService {

    private final CustomerRepository customerRepository;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public CustomerLoginService(CustomerRepository customerRepository, PasswordEncoder passwordEncoder) {
        this.customerRepository = customerRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<Customers> getAllUsers() {
        return customerRepository.findAll();
    }

    public Optional<Customers> getUserById(Integer userId) {
        return customerRepository.findById(userId);
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD

    public Customers getUserByName(String useString) {
        Customers oldUser = customerRepository.findByUsername(useString);
        return oldUser;
    }

    public Customers createUser(Customers user) {
        Customers oldUser = customerRepository.findByUsername(user.getUsername());
        if (oldUser != null) {
=======
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    public Customers getUserByName(String useString)
    {
        Customers oldUser = customerRepository.findByUsername(useString);
        return oldUser;
    }
    public Customers createUser(Customers user) {
        Customers oldUser = customerRepository.findByUsername(user.getUsername());
        if(oldUser != null)
        {
<<<<<<< HEAD
=======
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
            throw new CustomerAlreadyExistsException("User name Is Unavailable: " + user.getUsername());

        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return customerRepository.save(user);
    }

    public Customers updateUser(Customers user) {
<<<<<<< HEAD
        user.setPassword(passwordEncoder.encode(user.getPassword()));

=======
<<<<<<< HEAD
        user.setPassword(passwordEncoder.encode(user.getPassword()));

=======
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
        return customerRepository.save(user);
    }

    public void deleteUser(Integer id) {
<<<<<<< HEAD
        
=======
<<<<<<< HEAD

=======
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
        customerRepository.deleteById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Customers user = customerRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
        // ArrayList<String> role = new ArrayList<>();
        // role.add(user.getRole());
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
<<<<<<< HEAD
                new ArrayList<>()
        );
=======
                new ArrayList<>());
=======

        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                new ArrayList<>()
        );
>>>>>>> 52c3c056d67f84a2e4c916ee7f55a11f83fad432
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    }
}
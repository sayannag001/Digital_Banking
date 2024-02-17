package com.wecp.progressive.repository;

<<<<<<< HEAD

=======
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
import com.wecp.progressive.entity.Customers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customers, Integer> {

    Customers findByCustomerId(@Param("customerId") int customerId);

    void deleteByCustomerId(@Param("customerId") int customerId);

    Customers findByNameAndEmail(@Param("name") String name, @Param("email") String email);
    Customers findByUsername(String username);
<<<<<<< HEAD
}
=======
}
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef

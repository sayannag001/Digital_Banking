package com.wecp.progressive.repository;

import com.wecp.progressive.entity.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transactions, Integer> {

    List<Transactions> findByAccountsAccountId(int accountId);
<<<<<<< HEAD
}
=======
}
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef

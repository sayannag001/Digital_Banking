package com.wecp.progressive.service;


import com.wecp.progressive.entity.Accounts;
<<<<<<< HEAD
import com.wecp.progressive.exception.AccountNotFoundException;
=======
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef

import java.sql.SQLException;
import java.util.List;

public interface AccountService {
    // The methods mentioned below have to be used for JDBC interactions with the database.
    List<Accounts> getAllAccounts() throws SQLException;
    List<Accounts> getAccountsByUser(int userId) throws SQLException;
<<<<<<< HEAD
    Accounts getAccountById(int accountId) throws SQLException,AccountNotFoundException;
=======
    Accounts getAccountById(int accountId) throws SQLException;
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    int addAccount(Accounts accounts) throws SQLException;
    void updateAccount(Accounts accounts) throws SQLException;
    void deleteAccount(int accountId) throws SQLException;
    List<Accounts> getAllAccountsSortedByBalance() throws SQLException;

    // The methods mentioned below have to be used for storing and manipulating data in an ArrayList.
    List<Accounts> getAllAccountsFromArrayList();
    List<Accounts> addAccountToArrayList(Accounts accounts);
    List<Accounts> getAllAccountsSortedByBalanceFromArrayList() ;
    void emptyArrayList();
}
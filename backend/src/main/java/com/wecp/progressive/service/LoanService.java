package com.wecp.progressive.service;


import com.wecp.progressive.entity.Loan;
import com.wecp.progressive.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanService {
<<<<<<< HEAD
    @Autowired
    private LoanRepository loanRepository;

    
=======
    private final LoanRepository loanRepository;

    @Autowired
    public LoanService(LoanRepository loanRepository) {
        this.loanRepository = loanRepository;
    }
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef

    public List<Loan> getAllLoans() {
        return loanRepository.findAll();
    }

    public Loan getLoanById(Long id) {
<<<<<<< HEAD
        return loanRepository.findById(id).get();
=======
        return loanRepository.findById(id).orElse(null);
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef
    }

    public Loan createLoan(Loan loan) {
        return loanRepository.save(loan);
    }

    public void updateLoan(Loan loan) {
        loanRepository.save(loan);
    }

    public void deleteLoan(Long id) {
        loanRepository.deleteById(id);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> f1f5fcf2a3bc08b65b6bb7165bc9f206e3fd06ef

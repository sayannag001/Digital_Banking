package com.wecp.progressive;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BankSafeApplication {

    public static void main(String[] args) {
		SpringApplication.run(BankSafeApplication.class, args);
        System.out.println("Welcome to BankSafe Online!");
    }
}
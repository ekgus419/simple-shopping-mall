package com.simple.shoppingmall.repository;

import com.simple.shoppingmall.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
}

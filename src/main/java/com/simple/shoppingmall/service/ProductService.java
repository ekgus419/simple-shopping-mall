package com.simple.shoppingmall.service;

import com.simple.shoppingmall.dto.ProductDto;
import com.simple.shoppingmall.entity.Product;
import com.simple.shoppingmall.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductDto> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(ProductDto::from)
                .collect(Collectors.toList());
    }

    public ProductDto getProductById(Long id) {
        return productRepository.findById(id)
                .map(ProductDto::from)
                .orElse(null);
    }

    public ProductDto createProduct(ProductDto productDto) {
        Product product = productDto.toEntity();
        Product savedProduct = productRepository.save(product);
        return ProductDto.from(savedProduct);
    }

    public ProductDto updateProduct(Long id, ProductDto productDetails) {
        Optional<Product> optionalProduct = productRepository.findById(id);
        if (optionalProduct.isPresent()) {
            Product existingProduct = optionalProduct.get();
            Product updatedProduct = productDetails.toEntity();
            Product savedProduct = productRepository.save(Product.of(
                    existingProduct.getId(),
                    updatedProduct.getName(),
                    updatedProduct.getDescription(),
                    updatedProduct.getPrice(),
                    updatedProduct.getImageUrl()
            ));
            return ProductDto.from(savedProduct);
        }
        return null;
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
package com.simple.shoppingmall.dto;

import com.simple.shoppingmall.entity.Product;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record ProductDto (
        Long id,

        @NotBlank(message = "Name is mandatory")
        @Size(max = 100, message = "Name should not exceed 100 characters")
        String name,

        @NotBlank(message = "Description is mandatory")
        @Size(max = 500, message = "Description should not exceed 500 characters")
        String description,

        @NotNull(message = "Price is mandatory")
        @Positive(message = "Price must be positive")
        Double price,

        @NotBlank(message = "Image URL is mandatory")
        @Size(max = 255, message = "Image URL should not exceed 255 characters")
        String imageUrl
) {
    public static ProductDto of(Long id, String name, String description, Double price, String imageUrl) {
        return new ProductDto(id, name, description, price, imageUrl);
    }

    public static ProductDto of(String name, String description, Double price, String imageUrl) {
        return new ProductDto(null, name, description, price, imageUrl);
    }

    public static ProductDto from(Product productEntity) {
        return new ProductDto(
                productEntity.getId(),
                productEntity.getName(),
                productEntity.getDescription(),
                productEntity.getPrice(),
                productEntity.getImageUrl()
        );
    }

    public Product toEntity() {
        return Product.of(
                this.id,
                this.name,
                this.description,
                this.price,
                this.imageUrl
        );
    }
}
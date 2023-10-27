package com.world.alfs.controller.product.response;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ProductResponse {
    private Long id;

    private String name;

    private String title;

    private int price;

    private int sale;

    private String img;

    private String delivery;

    private String seller;

    private String pack;

    private int count;

    private int weight;

    private String allergy;

    private String expireDate;

    private String information;

    private String buyType;

    private int stock;

    private String content;


}

// src/pages/ProductDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Button, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, useToast } from '@chakra-ui/react';
import axios from 'axios';

import Loading from '../components/Loading';
import Error from '../components/Error';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const toast = useToast();
    const fetchProduct = async () => {
        try {
            const res = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`);
            setProduct(res?.data?.data);
        } catch (err) {
            setError('Failed to fetch product details');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        setIsDialogOpen(false);
        toast({
            title: "Item added to cart",
            status: "success",
            duration: 2000,
            isClosable: true,
        });
    };

    if (loading) return <Loading />;
    if (error) return <Error />;

    return (
        <Box>
            {product && (
                <Box>
                    <Text fontSize="2xl">{product.title}</Text>
                    <Text>{product.description}</Text>
                    <Button onClick={() => setIsDialogOpen(true)}>Add to Cart</Button>
                    <AlertDialog
                        isOpen={isDialogOpen}
                        leastDestructiveRef={null}
                        onClose={() => setIsDialogOpen(false)}
                    >
                        <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogHeader>Confirm Add to Cart</AlertDialogHeader>
                                <AlertDialogBody>
                                    Are you sure you want to add this item to the cart?
                                </AlertDialogBody>
                                <AlertDialogFooter>
                                    <Button onClick={() => setIsDialogOpen(false)}>
                                        Cancel
                                    </Button>
                                    <Button colorScheme="teal" onClick={handleAddToCart} ml={3}>
                                        Confirm
                                    </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>
                </Box>
            )}
        </Box>
    );
};

export default ProductDetailsPage;


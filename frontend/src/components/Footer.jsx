import React from 'react';
import { useRouter } from 'next/router';
import { Grid, Box, Link } from '@chakra-ui/react';
import FooterStyle from './FooterStyle.module.css';

const Footer = () => {
 const router = useRouter();

 const isHomePage = router.pathname === '/';

 return (
    <Grid
      as="footer"
      style={{ backgroundColor: '#333' }}
      templateColumns={isHomePage ? 'repeat(5, 1fr)' : 'repeat(4, 1fr)'}
      w="100%"
      maxW="1200px"
      mx="auto"
      py={isHomePage ? '24' : '16'}
      px="4"
      gridGap="16"
      alignItems="start"
      className={FooterStyle.footerStyle}
      position="absolute"
      bottom="0"
      width="100%"
    >
      <Box>
        <Link href="/" fontSize="lg" fontWeight="bold" color="white">
          Comwell
        </Link>
      </Box>
      <Box>
        <Link href="/services" color="white">
          Services
        </Link>
      </Box>
      <Box>
        <Link href="/industries" color="white">
          Industries
        </Link>
      </Box>
      {isHomePage && (
        <Box>
          <Link href="/blog" color="white">
            Blog
          </Link>
        </Box>
      )}
      <Box>
        <Link href="/contact" color="white">
          Contact
        </Link>
      </Box>
    </Grid>
 );
};

export default Footer;
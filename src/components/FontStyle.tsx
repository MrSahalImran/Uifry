"use client";
import React from "react";
import Head from "next/head";

const FontStyles = () => (
  <Head>
    <link
      href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style jsx global>{`
      body {
        font-family: "Clash Display", sans-serif;
      }
    `}</style>
  </Head>
);

export default FontStyles;

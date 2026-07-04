"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  onClick?: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <Link
      href="#home"
      onClick={onClick}
      className="relative flex items-center cursor-pointer shrink-0"
    >
      <img
        src="/chhoto-logo.png"
        width="150px"
        alt="Chhoto Logo"
        className="object-contain object-left"
      />
    </Link>
  );
}
